
import BookDetail from '@/components/book-detail';
import Sidebar from "@/components/sidebar"
import Header from '@/components/header';
import { TracingBeam } from '@/components/ui/tracing-beam';
import { TextGenerateEffectDemo } from '@/components/text-generate-demo';
import FocusButton from '@/components/focus-button';


export default function Page() {


  const book = {
    title: 'Harry Potter: Half Blood Prince',
    author: 'JK Rowling',
    description: 'Get ready to uncover the dark secrets and betrayals in the book. A thrilling adventure awaits you.',
    editors: ['J.K. Rowling', 'Christopher Reath', 'Alena Gestabon', 'Steve Korg'],
    language: 'Standard English (USA & UK)',
    pages: 345,
    isbn: '987 3 32564 455 B',
    coverImage: '/book7.png',
    reviewer: 'Roberto Jordan',
    review: 'What a delightful and magical book it is! It indeed transports readers to the wizarding world.',
  };

  return (
    <div className="flex min-h-screen w-full flex-col bg-muted/40">
      <Sidebar />
      <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-28">
        <Header />
        

        <TracingBeam className='z-20'>

        <main className='mx-[5vw] '>

            <div className='flex items-center'>
                <FocusButton />
                <h1 className='ml-8 text-5xl'>{book.title}</h1>
            </div>

            <TextGenerateEffectDemo css='font-extralight leading-10' speed={0.025} text="shadcn-blocks - Blocks is the official shadcn/ui pre-made but customizable components that can be copied and pasted into your projects.
shadcn-extension - An open-source component collection that extends your UI library, built using shadcn/ui components.
shadcn-ui-expansions - A lots of useful components which shadcn/ui does not have out of the box.
shadcn-extends - Intended to be a collection of components built using shadcn/ui.
shadcn-table-v2 - shadcn/ui table component with server-side sorting, filtering, and pagination.
shadcn-phone-input - Customizable phone input component with proper validation for any country.
shadcn-phone-input-2 - Simple and formatted phone input component built with shadcn/ui y libphonenumber-js
phone-input-shadcn-ui - Custom phone number component built with shadcn/ui.
password-input - shadcn/ui custom password input.
react-dnd-kit-tailwind-shadcn-ui - Drag and drop Accessible kanban board implementing using React, dnd-kit, tailwind, and shadcn/ui.
nextjs-dnd - Sortable Drag and Drop with Next.js, shadcn/ui, and dnd-kit.
fancy-multi-select - The Multi Select Component is inspired by campsite.design's and cal.com's settings forms.
auto-form - A React component that automatically creates a shadcn/ui form based on a zod schema.
date-range-picker-for-shadcn - Includes multi-month views, text entry, preset ranges, responsive design, and date range comparisons.
emblor - A highly customizable, accessible, and fully-featured tag input component built with shadcn/ui.
enhanced-button - An enhanced version of the default shadcn-button component.
time-picker - A simple TimePicker for your shadcn/ui project.
shadcn-chat - Customizable and reusable chat component for you to use in your projects.
nextjs-components - A collection of Next.js components build with TypeScript, React, shadcn/ui, Craft UI, and Tailwind CSS.
credenza - Ready-made responsive modal component for shadcn/ui.
country-state-dropdown - This Component is built with Nextjs, Tailwindcss, shadcn/ui & Zustand for state management.
shadcn-drag-table - A drag-and-drop table component using shadcn/ui and Next.js.
file-vault - File upload component for React.
file-uploader - A file uploader built with shadcn/ui and react-dropzone.
plate - The rich-text editor for React.
autocomplete-select-shadcn-ui - Autocomplete component built with shadcn/ui and Fancy Multi Select by Maximilian Kaske.
shadcn-data-table-advanced-col-opions - Column-resizing option to shadcn/ui DataTable.
pricing-page-shadcn - Pricing Page made with shadcn/ui & Next.js 14. Completely customizable
neobrutalism-components - Collection of neobrutalism-styled Tailwind React and Shadcn UI components.
shadcn-stepper - A complete stepper component built with shadcn/ui
shadcn-linear-combobox - A copy of the combobox that Linear uses to set the priority of a task.
magicui - React components to build beautiful landing pages using tailwindcss + framer motion + shadcn/ui
aceternityui - Copy paste the most trending react components without having to worry about styling and animations.
cult-ui - A well curated set of animated shadcn-style React components for more specific use-cases.
planner - Planner is a highly adaptable scheduling component tailored for React applications.
shadcn-cal - A copy of the monthly calendar used by Cal.com with shadcn/ui, Radix Colors and React Aria.
shadcn-ui-sidebar - A stunning, functional and responsive retractable sidebar built on top of shadcn/ui.
capture-photo - Capture-Photo is a versatile, browser-based React component designed to streamline the integration of camera functionalities directly into your web applications.
search-address - The SearchAddress component provides a flexible and interactive search interface for addresses, utilizing the powerful Nominatim service from OpenStreetMap.
sortable - A sortable component built with shadcn/ui, radix ui, and dnd-kit.
uixmat/onborda - Give your application the onboarding it deserves with Onborda product tour for Next.js
shadcn-multi-select-component - A multi-select component designed with shadcn/ui
echo-editor - A modern WYSIWYG rich-text editor base on tiptap and shadcn/ui
clerk-shadcn-theme - Easily synchronize your Clerk <SignIn /> and <SignUp /> components with your shadcn/ui styles
clerk-elements - Composable components that can be used to build custom UIs on top of Clerk's APIs
Apps
Plugins and Extensions
shadcn-ui - Add components from shadcn/ui directly from VS Code.
vscode-shadcn-svelte - VS Code extension for shadcn/ui components in Svelte projects.
vscode-shadcn-vue - Extension for integrating shadcn/ui components into Vue.js projects.
shadcn/ui Components Manager - A plugin for Jetbrain products. It allows you to manage your shadcn/ui components across Svelte, React, Vue, and Solid frameworks with this plugin. Simplify tasks like adding, removing, and updating components.
raycast-shadcn - Raycast extension to Browse shadcn/ui documentation, components and examples
vscode-shadcn-ui-snippets - Easily import and use shadcn-ui components with ease using snippets within VSCode. Just type cn or shadcn in you jsx/tsx file and you will get a list of all the components to choose from.
Colors and Customizations" />

        </main>

        </TracingBeam>
      </div>
    </div>
  )
}




