import React, { useContext, useState } from "react";
import { Form, Input, DatePicker, Upload, Button, message } from "antd";
import { InboxOutlined } from "@ant-design/icons";
import AdminNav from "../../../components/AdminNav/AdminNav";
import { addTrip } from "../../../utils/data";
import Context from "../../../context/context";

const { RangePicker } = DatePicker;

const AdminTrip = () => {
  const [form] = Form.useForm();
  const [fileList, setFileList] = useState([]);
  const { adminDashboardData, loading, token, setAdminDashboardData } = useContext(Context)


  const onFinish = async (values) => {
    // Handle form submission here
    console.log("Received values:", values);
    const formData = new FormData();
    const {
      title,
      photos,
      description,
      destination,
      startDate,
      endDate,
      price,
    } = values;
    console.log(photos)
    formData.append("title", title);
    formData.append("description", description);
    formData.append("destination", destination);
    // formData.append("startDate", startDate);
    // formData.append("endDate", endDate);
    formData.append("price", price);
    formData.append("photos", photos[0].originFileObj);
    const res = await addTrip(formData,token);
    console.log(res)

    message.success("Trip created successfully!");
    form.resetFields();
    setFileList([]);
  };

  const normFile = (e) => {
    if (Array.isArray(e)) {
      return e;
    }
    return e && e.fileList;
  };

  const onChange = ({ fileList: newFileList }) => {
    setFileList(newFileList);
  };

  return (
    <div>
      <AdminNav></AdminNav>
      <div className="p-md-3 m-1 p-1 m-md-2 container  d-flex  flex-column align-items-center justify-content-center w-100">
        <h5 className="my-3">Create Trip</h5>

        <Form
          className="w-75"
          form={form}
          name="adminTripForm"
          onFinish={onFinish}
          labelAlign="left"
          labelCol={{ span: 4 }}
        >
          <Form.Item
            label="Title"
            name="title"
            rules={[{ required: true, message: "Please input the title!" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Description"
            name="description"
            rules={[
              { required: true, message: "Please input the description!" },
            ]}
          >
            <Input.TextArea />
          </Form.Item>
          <Form.Item
            label="Photos"
            name="photos"
            required
            valuePropName="fileList"
            getValueFromEvent={normFile}
          >
            <Upload.Dragger
              name="files"
              multiple={true}
              fileList={fileList}
              onChange={onChange}
              beforeUpload={() => false}
            >
              <p className="ant-upload-drag-icon">
                <InboxOutlined />
              </p>
              <p className="ant-upload-text">
                Click or drag file to this area to upload
              </p>
            </Upload.Dragger>
          </Form.Item>
          <Form.Item
            label="Destination"
            name="destination"
            rules={[
              { required: true, message: "Please input the destination!" },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Date Range"
            name="dateRange"
            rules={[
              {
                type: "array",
                required: true,
                message: "Please select date range!",
              },
            ]}
          >
            <RangePicker />
          </Form.Item>
          <Form.Item
            label="Price"
            name="price"
            // rules={[
            //   {
            //     required: true,
            //     type: "number",
            //     min: 0,
            //     message: "Please input the price!",
            //   },
            // ]}
          >
            <Input type="number" />
          </Form.Item>
          <Form.Item wrapperCol={{ offset: 4, span: 14 }}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default AdminTrip;
