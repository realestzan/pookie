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
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
  import { Button } from "@/components/ui/button"
  import { Badge } from "@/components/ui/badge"
  import {
    Book,
    Bookmark,
    ChevronLeft,
    ChevronRight,
    Copy,
    CreditCard,
    File,
    Home,
    LineChart,
    ListFilter,
    MoreVertical,
    Package,
    Package2,
    PanelLeft,
    Search,
    Settings,
    ShoppingCart,
    Truck,
    Users2,
  } from "lucide-react"

const BookTable = () => {
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
                    <CardTitle>Read Books</CardTitle>
                    <CardDescription>
                      Recent books from your collection.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Owner</TableHead>
                          <TableHead className="hidden sm:table-cell">
                            Title
                          </TableHead>
                          <TableHead className="hidden sm:table-cell">
                            Status
                          </TableHead>
                          <TableHead className="hidden md:table-cell">
                            Format
                          </TableHead>
                          <TableHead className="text-right">Date</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                      <TableRow className="bg-accent">
                          <TableCell>
                            <div className="font-medium">Liam Johnson</div>
                            <div className="hidden text-sm text-muted-foreground md:inline">
                              liam@example.com
                            </div>
                          </TableCell>
                          <TableCell className="hidden sm:table-cell">
                           The Subtle Art of Not Giving a F*ck
                          </TableCell>
                          <TableCell className="hidden sm:table-cell">
                            <Badge className="text-xs" variant="secondary">
                              49%
                            </Badge>
                          </TableCell>
                          <TableCell className="hidden md:table-cell">
                              EPUB
                          </TableCell>
                          <TableCell className="text-right">2023-06-23</TableCell>
                        </TableRow>
              
<TableRow>
  <TableCell>
    <div className="font-medium">Ethan Williams</div>
    <div className="hidden text-sm text-muted-foreground md:inline">
      ethan@example.com
    </div>
  </TableCell>
  <TableCell className="hidden sm:table-cell">
    Atomic Habits
  </TableCell>
  <TableCell className="hidden sm:table-cell">
    <Badge className="text-xs" variant="secondary">
      75%
    </Badge>
  </TableCell>
  <TableCell className="hidden md:table-cell">
    PDF
  </TableCell>
  <TableCell className="text-right">2023-07-10</TableCell>
</TableRow>

<TableRow>
  <TableCell>
    <div className="font-medium">Ava Brown</div>
    <div className="hidden text-sm text-muted-foreground md:inline">
      ava@example.com
    </div>
  </TableCell>
  <TableCell className="hidden sm:table-cell">
    Becoming
  </TableCell>
  <TableCell className="hidden sm:table-cell">
    <Badge className="text-xs" variant="outline">
      Done
    </Badge>
  </TableCell>
  <TableCell className="hidden md:table-cell">
    TXT
  </TableCell>
  <TableCell className="text-right">2023-08-05</TableCell>
</TableRow>

<TableRow>
  <TableCell>
    <div className="font-medium">Mason Miller</div>
    <div className="hidden text-sm text-muted-foreground md:inline">
      mason@example.com
    </div>
  </TableCell>
  <TableCell className="hidden sm:table-cell">
    The Power of Now
  </TableCell>
  <TableCell className="hidden sm:table-cell">
    <Badge className="text-xs" variant="secondary">
      90%
    </Badge>
  </TableCell>
  <TableCell className="hidden md:table-cell">
    RTF
  </TableCell>
  <TableCell className="text-right">2023-05-14</TableCell>
</TableRow>

<TableRow>
  <TableCell>
    <div className="font-medium">Sophia Davis</div>
    <div className="hidden text-sm text-muted-foreground md:inline">
      sophia@example.com
    </div>
  </TableCell>
  <TableCell className="hidden sm:table-cell">
    Rich Dad Poor Dad
  </TableCell>
  <TableCell className="hidden sm:table-cell">
    <Badge className="text-xs" variant="outline">
      Pending
    </Badge>
  </TableCell>
  <TableCell className="hidden md:table-cell">
    MOBI
  </TableCell>
  <TableCell className="text-right">2023-09-12</TableCell>
</TableRow>

<TableRow className="bg-accent">
  <TableCell>
    <div className="font-medium">Jackson Wilson</div>
    <div className="hidden text-sm text-muted-foreground md:inline">
      jackson@example.com
    </div>
  </TableCell>
  <TableCell className="hidden sm:table-cell">
    Sapiens
  </TableCell>
  <TableCell className="hidden sm:table-cell">
    <Badge className="text-xs" variant="secondary">
      60%
    </Badge>
  </TableCell>
  <TableCell className="hidden md:table-cell">
    EPUB
  </TableCell>
  <TableCell className="text-right">2023-03-30</TableCell>
</TableRow>

                      </TableBody>
                    </Table>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
    </div>
  )
}

export default BookTable
