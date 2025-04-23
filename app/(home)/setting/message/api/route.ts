import dbConnection from '@/lib/database/dbConnection'
import User from '@/lib/database/model/user'
import { NextRequest, NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import Buy from '@/lib/database/model/buy';
import Product from '@/lib/database/model/product';

export async function GET(req: NextRequest) {
    
    await dbConnection()
    
    const cookie = await cookies()
    
    
    if(cookie) {
        const isExist = await User.findOne({email: cookie.get("email")?.value})
        if(isExist.account_type == "business") {
            const b_acc = await Buy.aggregate([
                {
                  $unwind: "$items"
                },
                {
                  $match: {
                    "items.ownerId": isExist._id
                  }
                },
                {
                  $project: {
                    userId: 1,
                    _id: 1,
                    items: [ "$items" ]
                  }
                }
            ])

            let data;
            for(let i=0; i<b_acc.length; i++) {
              data = await Product.findById(b_acc[i].items[0].productId)

              b_acc[i].items[0].productName = data.name
              b_acc[i].items[0].productPrice = data.price
              b_acc[i].items[0].imgURL = data.imgURL[0]
            }

            return NextResponse.json({
                isExist,
                totalMessages : b_acc
            }, { status: 200 })
        }

        if(isExist.account_type == 'personal') {
          const b_acc = await Buy.aggregate([
              {
                $unwind: "$items"
              },
              {
                $match: {
                  "userId": isExist._id,
                  "items.status": {
                    $in: ["confirmed", "cancel"]
                  }
                }
              },
              {
                $project: {
                  userId: 1,
                  _id: 1,
                  items: [ "$items" ]
                }
              }
          ])
          return NextResponse.json({
            isExist,
            totalMessages: b_acc
          }, { status: 200 })
        }
        else {
          return NextResponse.json(isExist, { status: 200 })
        }
    }
    else {
        return NextResponse.json(null)
    }
}

export async function POST(req:NextRequest) {
  const { pId, cId, status } = await req.json()
  const findUser = await Buy.updateOne(
    {
      userId: cId
    },
    {
      $set: {
        "items.$[elem].status": status
      }
    },
    {
      arrayFilters: [
        {
          "elem.productId": pId
        }
      ]
    }
  )
}