
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Card,
  CardContent,
  CardDescription,

  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {

  File,

  ListFilter,

} from "lucide-react"
import { Progress } from "@/components/ui/progress"
import { getBook } from "@/lib/operations"

const BookUploadTable = async () => {

  const books = await getBook();


  return (
    <div>
      <Tabs defaultValue="week">
        <div className="flex items-center">
          <TabsList>
            <TabsTrigger value="week">Week</TabsTrigger>
            <TabsTrigger value="month">Month</TabsTrigger>
            <TabsTrigger value="year">Year</TabsTrigger>
          </TabsList>
          <div className="ml-auto flex items-center gap-2">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="outline"
                  size="sm"
                  className="h-7 gap-1 text-sm"
                >
                  <ListFilter className="h-3.5 w-3.5" />
                  <span className="sr-only sm:not-sr-only">Filter</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>Filter by</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuCheckboxItem checked>
                  Fulfilled
                </DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem>
                  Declined
                </DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem>
                  Refunded
                </DropdownMenuCheckboxItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Button
              size="sm"
              variant="outline"
              className="h-7 gap-1 text-sm"
            >
              <File className="h-3.5 w-3.5" />
              <span className="sr-only sm:not-sr-only">Export</span>
            </Button>
          </div>
        </div>




        <TabsContent value="week">
          <Card x-chunk="dashboard-05-chunk-3">
            <CardHeader className="px-7">
              <CardTitle>Uploading Books</CardTitle>
              <CardDescription>
                See status and check updating information
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Title</TableHead>
                    <TableHead className="hidden sm:table-cell">
                      Page
                    </TableHead>
                    <TableHead className="hidden sm:table-cell">
                      Progress
                    </TableHead>
                    <TableHead className="hidden sm:table-cell">
                      Status
                    </TableHead>
                    {/* <TableHead className="hidden md:table-cell">
                            Format
                          </TableHead>*/}
                    <TableHead className="text-right">Date</TableHead>
                  </TableRow>
                </TableHeader>

                <TableBody>

                  
                {
                        books.map((book) => { 
                          return ( 
                            <TableRow key={book.id}>
                              <TableCell>
                                <div className="font-medium">{book.title}</div>
                                <div className="hidden text-sm text-muted-foreground md:inline">
                                  {book.author}
                                </div>
                              </TableCell>
                              <TableCell className="hidden sm:table-cell">
                                {book.pages}
                              </TableCell>
                              <TableCell className="hidden sm:table-cell">
                                <Progress value={33} color="red" className="bg-primary-foreground min-w-[20vw]" />
                              </TableCell>
                              <TableCell className="hidden md:table-cell">
                                <Badge>93% Completed</Badge>
                              </TableCell>
                              <TableCell className="text-right">2023-06-23</TableCell>
                            </TableRow>
                          )
                        })
                      }


                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

export default BookUploadTable
