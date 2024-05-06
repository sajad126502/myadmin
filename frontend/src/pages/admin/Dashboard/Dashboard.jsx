import React, { useContext, useEffect } from 'react'
import AdminNav from '../../../components/AdminNav/AdminNav'
import { fetchAdminDashboard } from '../../../utils/data'
import Context from '../../../context/context'
import { Button, Select, Table,Rate } from "antd"
import dayjs from 'dayjs'
import { DeleteOutlined, EditOutlined } from "@ant-design/icons"
import { Link } from 'react-router-dom'
export default function Dashboard() {
    const { adminDashboardData, loading, token, setAdminDashboardData } = useContext(Context)
    const fetchAdminDashboardData = async () => {
        try {
            const { data } = await fetchAdminDashboard(token)
            setAdminDashboardData(data)
           
        } catch (error) {
            

        }
    }
    useEffect(() => {
        fetchAdminDashboardData()
    }, [])

const column3 = [
  {
    title: 'User Name',
    dataIndex: ['user', 'name'],
    key: 'userName',
  },
  {
    title: 'Rating',
    dataIndex: 'rating',
    key: 'rating',
    render: rating => <Rate disabled defaultValue={rating} />,
  },
  {
    title: 'Comment',
    dataIndex: 'comment',
    key: 'comment',
  },
  {
    title: 'Reviewed At',
    dataIndex: 'createdAt',
    key: 'createdAt',
    render: (date) => {
        return dayjs(date).format("MM /DD / YYYY")
    }
  },
  {
    title: 'Delete Review',
    dataIndex: "action",
    className:"text-center",
    render: (_id) => {
        return <DeleteOutlined style={{ cursor: "pointer" }} className='p-0 m-0' />
    }
},
  
];

    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
        },
        {
            title: 'Email',
            dataIndex: 'email',
        },
        {
            title: 'Role',
            dataIndex: 'role',
        },
        {
            title: 'Total Order',
            dataIndex: "tripOrders",
            render: (orders) => {
                return orders.length
            }
        },
        {
            title: 'Registered on',
            dataIndex: "createdAt",
            render: (date) => {
                return dayjs(date).format("MM /DD / YYYY")
            }
        },
        {
            title: "Change role",
            render: () => {
                return <Select style={{ minWidth: 150 }} placeholder="Change role" options={[
                    { label: "user", value: "user" },
                    { label: "admin", value: "admin" }

                ]} ></Select>
            }
        }
    ];
    const columns1 = [
        {
            title: 'Title',
            dataIndex: 'title',
        },
        {
            title: 'Description',
            dataIndex: 'description',
        },
        {
            title: 'destination',
            dataIndex: 'destination',
        },
        {
            title: 'Price',
            dataIndex: 'price',
          render:(value)=><span style={{color:"#0341fc",fontWeight:"bold"}}> ₹ {value}</span>

        },
        {
            title: 'Ratings',
            dataIndex: 'ratings',
        },
        {
            title: 'destination',
            dataIndex: 'destination',
        },
        {
            title: 'startDate',
            dataIndex: 'startDate',
            render: (date) => {
                return dayjs(date).format("MM /DD / YYYY")
            }
        },
        {
            title: 'endDate',
            dataIndex: 'endDate',
            render: (date) => {
                return dayjs(date).format("MM /DD / YYYY")
            }
        },
        {
            title: 'Action',
            dataIndex: "action",
            render: (_id) => {
                return <div className='d-flex gap-3'>
                    <DeleteOutlined style={{ cursor: "pointer" }} className='p-0 m-0' />
                    <EditOutlined style={{ cursor: "pointer" }} className='p-0 m-0' />

                </div>
            }
        },


    ];
    const columns2 = [
        {
          title: 'User Name',
          dataIndex: ['user', 'name'],
          key: 'userName',
        },
        {
          title: 'User Email',
          dataIndex: ['user', 'email'],
          key: 'userEmail',
        },
        {
          title: 'Trip Title',
          dataIndex: ['trip', 'title'],
          key: 'tripTitle',
        },
        {
          title: 'Total Price Paid',
          dataIndex: 'totalPricePaid',
          key: 'totalPricePaid',
          render:(value)=><span style={{color:"#0341fc",fontWeight:"bold"}}> ₹ {value}</span>
        },
        {
          title: 'Status',
          dataIndex: 'status',
          key: 'status',
          render:(value)=>{
            return <Select style={{ minWidth: 150 }} value={value} options={[
                { label: 'Pending', value: 'pending' },
                { label: 'Confirmed', value: 'confirmed' },
                { label: 'Cancelled', value: 'cancelled' }
              ]}>

            </Select>
          }
        },
        {
          title: 'Created At',
          dataIndex: 'createdAt',
          key: 'createdAt',
          render: (date) => {
            return dayjs(date).format("MM /DD / YYYY")
        }
        },
      ];
      

    return (
        <div>
            <AdminNav></AdminNav>
            <div className='d-flex p-md-4 p-2 flex-column'>
            <div >

                <h5 className='p-md-4 p-2'>Users</h5>
                <Table columns={columns} loading={loading} dataSource={adminDashboardData.users} size="small" />
            </div>
            <div>

               <div className='w-100 p-md-4 p-2 d-flex justify-content-between'>
                
                 <h5 >Trips</h5>
                 <Link to={"addtrip"}>Add Trip</Link>
                </div>
                <Table columns={columns1} loading={loading} dataSource={adminDashboardData.trips} size="small" />
            </div>
            <div >
                <h5 className='p-md-4 p-2'>Orders</h5>
                <Table columns={columns2} loading={loading} dataSource={adminDashboardData.orders} size="small" />
            </div>
            <div >
                <h5 className='p-md-4 p-2'>Reviews</h5>
                <Table columns={column3} loading={loading} dataSource={adminDashboardData.reviews} size="small" />
            </div>
            </div>



        </div>
    )
}
