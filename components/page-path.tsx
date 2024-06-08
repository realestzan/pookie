'use client'
import React from 'react'
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
  } from "@/components/ui/breadcrumb"
  import { usePathname } from "next/navigation"
import Link from 'next/link'

const PagePath = () => {

  const pathname = usePathname()
  const paths = pathname.split('/').filter(Boolean);


  return (
    <div>
      <Breadcrumb className="hidden md:flex">
      <BreadcrumbList>
         {paths.map((path, index) => {
        const href = `/${paths.slice(0, index + 1).join('/')}`;

        return (
          <div key={index} className="flex items-center">
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link href={href}>
                  {path.charAt(0).toUpperCase() + path.slice(1)}
                </Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            {index < paths.length - 1 && (
              <BreadcrumbSeparator className="ml-3" />
            )}
          </div>
        );
      })}
      </BreadcrumbList>
    </Breadcrumb>
    </div>
  )
}

export default PagePath
