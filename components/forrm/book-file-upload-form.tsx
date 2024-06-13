'use client'
import { UploadButton } from '@/utils/uploathing';
import { FormEvent, useEffect, useState } from 'react';
import io from 'socket.io-client';
import { Progress } from '../ui/progress';
import { FlipWordsDemo } from '../flip-words-demo';
import { GlowingStarsCard } from '../glowing-stars-card';
import { GlowingStarsBackgroundCard, GlowingStarsDescription } from '../ui/glowing-stars';
import { Button } from '../ui/button';
import { AuroraButton } from '../ui/aurora-button';
import { Input } from '../ui/aurora-input';
import { AuroraButtonDemo } from '../aurora-button';
import { Option } from '../headless/option';
import HLDialog from '../headless/dialog';
import { OurFileRouter } from '@/app/api/uploadthing/core';


const FileUploadForm: React.FC = () => {
    const [isDialog, setIsDialog] = useState(false)
    const [dialogContent, setDialogContent] = useState({
        title: 'Dialog Title',
        desc: 'This is the dialog description.',
        button: 'Close Dialog'
    });
    const [isUploaded, setIsUploaded] = useState(false);
    const [isPodcast, setIsPodcast] = useState(false);
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [extractedText, setExtractedText] = useState<{ page: string, content: string }[]>([]);
    const [coverImageUrl, setCoverImageUrl] = useState<string | null>(null);
    const [metadata, setMetadata] = useState<any>(null);
    const [textFileUrl, setTextFileUrl] = useState<string | null>(null);
    const [audioUrl, setAudioUrl] = useState<string | null>(null);
    const [extractProgress, setExtractProgress] = useState(0);
    const [podcastProgress, setPodcastProgress] = useState(0);

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files.length > 0) {
            setSelectedFile(event.target.files[0]);
        }
    };

    useEffect(() => {
        const socket = io('http://localhost:4000')

        socket.on('progress', (data) => {
            setExtractProgress(data.extract);
            console.log('Progress:', data.extract);
            setPodcastProgress(data.podcast);
            console.log('Podcast',data.podcast);
        });

        return () => socket.disconnect();
    }, []);

    async function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        console.log('handleSubmit called');

        if (!selectedFile) {
            setIsDialog(true);
            setDialogContent({
                title: 'No File Selected',
                desc: 'Please select a file.',
                button: 'Close Dialog'
            })
            return;
        }

        const formData = new FormData();
        formData.append('file', selectedFile);

        try {
            const response = await fetch('http://localhost:4000/api/extract_book', {
                method: 'POST',
                body: formData,
            });

            if (response.ok) {
                const data = await response.json();

                // Process extracted texts into a more usable format
                const processedTexts = Object.entries(data.texts).map(([page, content]) => ({
                    page,
                    content
                }));

                setExtractedText(processedTexts);
                setCoverImageUrl(data.cover_image);
                setTextFileUrl(data.text_file_url);
                setIsUploaded(true)
                setMetadata(data.metadata)
            } else {
                setIsDialog(true);
                setDialogContent({
                    title: 'Error Uploading File',
                    desc: 'Please try again.',
                    button: 'Close Dialog'
                })
            }
        } catch (error) {
            console.error('Error uploading file:', error);
            setIsDialog(true);
            setDialogContent({
                title: 'Error Uploading File',
                desc: 'Please try again.',
                button: 'Close Dialog'
            })
        }
    }

    const handleTTS = async () => {
        if (!extractedText) {
            setIsDialog(true);
            setDialogContent({
                title: 'No Text Extracted',
                desc: 'Please extract text from a file first.',
                button: 'Close Dialog'
            })
            return;
        }

        setIsPodcast(true)

        try {
            const response = await fetch('http://localhost:4000/api/podcast', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ text: extractedText }),
            });

            if (response.ok) {
                const blob = await response.blob();
                const url = URL.createObjectURL(blob);
                setAudioUrl(url);
            } else {
                const errorResponse = await response.json();
                setIsDialog(true);
                setDialogContent({
                    title: 'TTS Conversion Failed',
                    desc: `Please try again ${errorResponse.error} `,
                    button: 'Close Dialog'
                })
            }
        } catch (error) {
            console.error('Error converting text to speech:', error);
            setIsDialog(true);
            setDialogContent({
                title: 'TTS Conversion Failed',
                desc: 'Please try again.',
                button: 'Close Dialog'
            })
        }
    };


    return (
        <div className="flex flex-col items-center space-y-4 justify-center">
              <HLDialog
                isOpen={isDialog}
                setIsOpen={setIsDialog}
                title={dialogContent.title}
                button={dialogContent.button}
                desc={dialogContent.desc}
            />
            {!isUploaded && (
                <div className='flex-flex-col gap-4 mt-[20vh]'>
                    <FlipWordsDemo text1='Upload your' words={['.EPUB', '.MOBI', '.PDF', '.TXT']} text2='book' />
                    <form method='POST' onSubmit={handleSubmit} className='w-full h-full flex flex-col gap-8 mt-4'>
                        <label className="block">
                            <Input
                                type="file"
                                accept=".epub,.txt,.mobi,.pdf"
                                onChange={handleFileChange}
                                className="mt-1 block w-full"
                            />
                        </label>
                        <Button variant={'default'} type="submit">
                            Submit
                        </Button>
                        {extractProgress != 0 && (
                            <div className='flex flex-col gap-4'>
                                <Progress value={extractProgress} />
                                <p >Upload Progress: {Math.round(extractProgress)}%</p>
                            </div>
                        )}
                    </form>
                </div>
            )}


            {isUploaded && (
                <div>
                    <aside className='flex justify-between'>
                        <GlowingStarsCard css='max-h-[50vh] max-w-[50vw]' text={metadata.authors} desc={metadata.title} img={`data:image/png;base64,${coverImageUrl}`} /> 

                        <div className='flex gap-4 mb-4 w-full items-center'>
                            <Button variant={'secondary'} onClick={handleTTS}>Podcast</Button>
                            <Button variant={'secondary'} onClick={() => setIsUploaded(false)}>Upload Another File</Button>
                            <UploadButton 
                                    appearance={{
                                        button:
                                        "ut-ready:bg-green-500 ut-uploading:cursor-not-allowed rounded-r-none bg-primary bg-none after:bg-primary text-empty",
                                        // label: 'text-lg text-black',
                                      container: "w-max flex-row rounded-md border-cyan-300 bg-slate-800",
                                      allowedContent:
                                        "flex h-8 flex-col items-center justify-center px-2 text-white",
                                    }}
                                   endpoint="bookUploader"
                                   onClientUploadComplete={(res) => {
                                     // Do something with the response
                                     console.log("Files: ", res);
                                     setIsDialog(true);
                                     setDialogContent({
                                        title: 'Image Uploaded',
                                        desc: 'Image has been uploaded successfully.',
                                        button: 'Close Dialog'
                                     })
                                   }}
                                   onUploadError={(error: Error) => {
                                     // Do something with the error.
                                     setIsDialog(true);
                                     setDialogContent({
                                        title: 'Error Uploading Image',
                                        desc: `Please try again: ${error.message}`,
                                        button: 'Close Dialog'
                                     })
                                   }}
                                />
                            { Math.floor(podcastProgress) == 0 && ( <Progress className='bg-primary/10' value={Math.floor(podcastProgress)} /> )}
                            <Option />
                            {audioUrl && (
                                <audio controls>
                                    <source src={audioUrl} type="audio/mpeg" />
                                    Your browser does not support the audio element.
                                </audio>
                            )}
                            {metadata.subject && (<h2 className="font-bold text-2xl mb-4">Subject: {metadata.subject}</h2>)}
                            {metadata.keywords && (<h2 className="font-bold text-2xl mb-4">Keywords: {metadata.keywords}</h2>)}
                        </div>
                    </aside>
                    {extractedText.length > 0 && (
                        <div>
                            {extractedText.map(({ page, content }) => (
                                <div key={page} className="mb-4 ">
                                    <h2 className="text-5xl mb-4 text-neutral-400">{page}</h2>
                                    <p className='leading-8 text-lg text-primary/90'>{content}</p>
                                </div>
                            ))}
                        </div>
                    )}
                    {textFileUrl && (
                        <div className="mt-4">
                            <a href={textFileUrl} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                                Download Extracted Text
                            </a>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default FileUploadForm;
