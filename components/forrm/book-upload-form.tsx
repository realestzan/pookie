
'use client'
  
import Image from "next/image"
import Link from "next/link"
import {
  ChevronLeft,
  Home,
  LineChart,
  Package,
  Package2,
  PanelLeft,
  PlusCircle,
  Search,
  Settings,
  ShoppingCart,
  Upload,
  Users2,
} from "lucide-react"

import { Badge } from "@/components/ui/badge"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Textarea } from "@/components/ui/textarea"
import {
  ToggleGroup,
  ToggleGroupItem,
} from "@/components/ui/toggle-group"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import React, { FC, useState } from 'react';
import { Input } from '../ui/aurora-input';
import { Button } from '../ui/aurora-button';
import { FlipWordsDemo } from "@/components/flip-words-demo";
import { AnimatedTooltipPreview } from "../animated-avatars"
import { useRouter } from "next/navigation"

interface BookFormData {
  id: number;
  title: string;
  author: string;
  description: string;
  language: string;
  isbn: string;
  cover_image: string;
  reviewer: string;
  review: string;
  pages: number;
}

const BookUploadForm = () => {
  const [formData, setFormData] = useState<BookFormData>({
    id: 0,
    title: 'Harry Potter: Half Blood Prince',
    author: 'JK Rolling',
    description: 'The story takes olace during Harrs sixth vear at Hogwarts School ofi Witchcraft and Wizardry, where he discovers more about Lord Voldemorts past and the prophecy that foretells his defeat. With action-packed sequences, shocking twists, and moments of heart-wrenching tragedy, Half-Blood Prince is a must-read for any fan of the Harry Potter series.',
    language: 'English',
    isbn: '987 3 32564 455 B',
    cover_image: '/book8.png',
    reviewer: 'Roberto Jordan',
    review: 'What a delightful and magical book it is! It indeed transports readers to the wizarding world',
    pages: 239,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: name === 'id' || name === 'pages' ? parseInt(value) : value });
  };

  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
          try {
          const response = await fetch('/api/book', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
          });
    
          console.log('books', JSON.stringify(formData));
    
          if (response.ok) {
            alert('Book added successfully');
            router.push('/book/upload/list');
          } else {
            const errorData = await response.json();
            console.error(`Failed to add book: ${errorData.error}`);
          }
        } catch (error) {
          console.error('Failed to submit form:', error);
        }
  };

  return (
    <form method='POST' onSubmit={handleSubmit}>

    <div className="flex justify-between pb-14">
      <FlipWordsDemo text1="Publish" words={['books', 'magazine', 'news']} text2="to community!" />
      <div className="flex items-center text-4xl gap-14 font-black">
        {/* Publish now */}
      <Button type='submit' size="sm" variant="secondary">
              Lets go 🚀
            </Button>
      </div>
    </div>

    <div className="flex gap-20">
      <div className="basis-1/3">
      
      
      
    <Card className="mb-4">
      <CardHeader>
        <CardTitle>Book details</CardTitle>
        <CardDescription>
          <Input type="number" placeholder="ID" name="id" value={formData.id} onChange={handleChange} required />
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-6">
          <div className="grid gap-3">
            <Label htmlFor="name">Title</Label>
              <Input type="text" placeholder="Author" name="author" defaultValue={formData.title} onChange={handleChange} required />

          </div>
          <div className="grid gap-3">
            <Label htmlFor="description">Description</Label>
            <Textarea placeholder="Author" name="author" defaultValue={formData.description} onChange={handleChange} required />
            
          </div>
        </div>
    
      </CardContent>
    </Card>








    <Card className="mb-4">
      <CardHeader>
        <CardTitle>Pages</CardTitle>
        <CardDescription>
          Amount
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Name</TableHead>
              <TableHead>From</TableHead>
              <TableHead>To</TableHead>
              <TableHead className="w-[100px]">Size</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
          
            <TableRow>
              <TableCell className="font-semibold">GGPC-003</TableCell>
              <TableCell>
                <Label htmlFor="stock-3" className="sr-only">
                  Stock
                </Label>
                <Input id="stock-3" type="number" defaultValue="0" />
              </TableCell>
              <TableCell>
                <Label htmlFor="price-3" className="sr-only">
                  Stock
                </Label>
                <Input type="number" placeholder="Pages" name="pages" value={formData.pages} onChange={handleChange} required />
              </TableCell>
              <TableCell>
                <ToggleGroup type="single" defaultValue="s" variant="outline">
                  <ToggleGroupItem value="s">S</ToggleGroupItem>
                  <ToggleGroupItem value="m">M</ToggleGroupItem>
                  <ToggleGroupItem value="l">L</ToggleGroupItem>
                </ToggleGroup>
              </TableCell>
            </TableRow>

          </TableBody>
        </Table>
      </CardContent>
      <CardFooter className="justify-center border-t p-4">
        <Button size="sm" variant="ghost" className="gap-1">
          <PlusCircle className="h-3.5 w-3.5" />
          Add Separator
        </Button>
      </CardFooter>
    </Card>








      
      </div>


    <div className="basis-1/3">
    <Card className="mb-4">
    <CardHeader>
        <CardTitle>More detail</CardTitle>
      </CardHeader>
        <CardContent>
      <Input type="text" placeholder="Author" name="author" value={formData.author} onChange={handleChange} required />
      <Input type="text" placeholder="Language" name="language" value={formData.language} onChange={handleChange} required />
      <Input type="text" placeholder="ISBN" name="isbn" value={formData.isbn} onChange={handleChange} required />
      <Input type="text" placeholder="Cover Image URL" name="cover_image" value={formData.cover_image} onChange={handleChange} required />
      <Input type="text" placeholder="Reviewer" name="reviewer" value={formData.reviewer} onChange={handleChange} required />
      <Textarea placeholder="Review" name="review" value={formData.review} onChange={handleChange} required />
    <AnimatedTooltipPreview />

        </CardContent>
      </Card>







    <Card className="mb-4">
      <CardHeader>
        <CardTitle>Product Category</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid gap-6 sm:grid-cols-3">
          <div className="grid gap-3">
            <Label htmlFor="category">Category</Label>
            <Select>
              <SelectTrigger id="category" aria-label="Select category">
                <SelectValue placeholder="Select category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="clothing">Clothing</SelectItem>
                <SelectItem value="electronics">Electronics</SelectItem>
                <SelectItem value="accessories">Accessories</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="grid gap-3">
            <Label htmlFor="subcategory">Subcategory (optional)</Label>
            <Select>
              <SelectTrigger id="subcategory" aria-label="Select subcategory">
                <SelectValue placeholder="Select subcategory" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="t-shirts">T-Shirts</SelectItem>
                <SelectItem value="hoodies">Hoodies</SelectItem>
                <SelectItem value="sweatshirts">Sweatshirts</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </CardContent>
    </Card>
      
</div>




      <div className="basis-1/3">


      <Card className="mb-4">
      <CardHeader>
        <CardTitle>Product Status</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid gap-6">
          <div className="grid gap-3">
            <Label htmlFor="status">Status</Label>
            <Select>
              <SelectTrigger id="status" aria-label="Select status">
                <SelectValue placeholder="Select status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="draft">Draft</SelectItem>
                <SelectItem value="published">Active</SelectItem>
                <SelectItem value="archived">Archived</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </CardContent>
    </Card>








    









    {/* <Card className="mb-4">
      <CardHeader>
        <CardTitle>Publish book</CardTitle>
        <CardDescription>
          Share to community
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div></div>
        <Button size="sm" variant="secondary">
          Lets go 🚀
        </Button>
      </CardContent>
    </Card> */}



<Card className="overflow-hidden">
      <CardHeader>
        <CardTitle>Product Images</CardTitle>
        <CardDescription>
          Lipsum dolor sit amet, consectetur adipiscing elit
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-2">
          <Image
            alt="Product image"
            className="aspect-square w-full rounded-md object-cover"
            height="300"
            src="/book7.png"
            width="300"
          />
          <div className="grid grid-cols-3 gap-2">
            <button>
              <Image
                alt="Product image"
                className="aspect-square w-full rounded-md object-cover"
                height="84"
                src="/book8.png"
                width="84"
              />
            </button>
            <button>
              <Image
                alt="Product image"
                className="aspect-square w-full rounded-md object-cover"
                height="84"
                src="/book9.png"
                width="84"
              />
            </button>
            <button className="flex aspect-square w-full items-center justify-center rounded-md border border-dashed">
              <Upload className="h-4 w-4 text-muted-foreground" />
              <span className="sr-only">Upload</span>
            </button>
          </div>
        </div>
      </CardContent>
    </Card>
  
</div>


    </div>
    
  </form>
  );
};

export default BookUploadForm;
{/* <Input type="number" placeholder="ID" name="id" value={formData.id} onChange={handleChange} required />
<Input type="text" placeholder="Title" name="title" value={formData.title} onChange={handleChange} required />
<Input type="text" placeholder="Author" name="author" value={formData.author} onChange={handleChange} required />
<Input type="text" placeholder="Language" name="language" value={formData.language} onChange={handleChange} required />
<Input type="text" placeholder="ISBN" name="isbn" value={formData.isbn} onChange={handleChange} required />
<Input type="text" placeholder="Cover Image URL" name="cover_image" value={formData.cover_image} onChange={handleChange} required />
<Input type="text" placeholder="Reviewer" name="reviewer" value={formData.reviewer} onChange={handleChange} required />
<Input type="number" placeholder="Pages" name="pages" value={formData.pages} onChange={handleChange} required /> */}