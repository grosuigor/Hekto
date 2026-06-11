import { NextResponse } from "next/server"

export async function GET() {
  return NextResponse.json({
    "title": "Products",
    "routes": [
      {
        "route": "/list",
        "desc": "lists all products"
      },
      {
        "route": "/retrieve/[id]",
        "desc": "retrieves product by id"
      },
      {
        "route": "/search",
        "desc": "search through products"
      },
      {
        "route": "/discounts",
        "desc": "lists 4 products with discounts"
      },
      {
        "route": "/featured",
        "desc": "lists 4 featured products"
      },
      {
        "route": "/latest",
        "desc": "lists 4 latest products"
      },
      {
        "route": "/trending",
        "desc": "lists 4 trending products"
      },
      {
        "route": "/cart",
        "desc": "retrieves cart products by comma-separated ids query param"
      },
    ]
  })
}