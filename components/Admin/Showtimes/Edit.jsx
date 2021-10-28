import React, { useState, useEffect } from 'react';
import { Modal, Form, Input, Select } from 'antd'
import moment from 'moment'
import apiService from '../../../utils/api/apiService';

const { Option } = Select;

const AdminShowtimeEdit = ({
    showModal,
    setShowModal,
    showtimeDetail,
   
}) => {
    const [form] = Form.useForm()

    const [rooms, setRooms] = useState([]);
    const [cinemas, setCinemas] = useState([]);
    const [movies, setMovies] = useState([]);

    const getMovies = async () => {
        try {
          const response = await apiService.get("/movies/getallmovie");
          setMovies(response.data);
        } catch (error) {
          console.log(error);
        }
      };
      const getCinemas = async () => {
        try {
          const response = await apiService.get("/cinemas/getAllCinemas");
          setCinemas(response.data);
        } catch (error) {
          console.log(error);
        }
      };
      const getRooms = async () => {
        try {
          const response = await apiService.get("/rooms");
          setRooms(response.data);
        } catch (error) {
          console.log(error);
        }
      };

    useEffect(() => {
        if (showModal) {
            form.setFieldsValue({
                ...showtimeDetail
            });
        }
    }, [showModal])

    const handleUpdate = () => {
        // form.validateFields()
        //     .then(values => {
        //         updateRooms(roomDetail._id, values);
        //     })
    }

    useEffect(() => {
        getCinemas();
        getMovies();
        getCinemas();
        getRooms();
    }, [])
    return (
        <>
            <Modal
                title="Chỉnh sửa xuất chiếu"
                visible={showModal}
                onOk={handleUpdate}
                onCancel={() => setShowModal(false)}
            >
                <Form form={form} layout='vertical' className="mx-auto">
                <Form.Item
          label="Phim"
          name="movies"
          rules={[{ required: true, message: "Phim không được để trống!" }]}
        >
          <Select placeholder="Chọn phim">
            {movies.map((item) => (
              <Option key={item._id} value={item._id}>
                {item.title}
              </Option>
            ))}
          </Select>
        </Form.Item>
        <Form.Item
          label="Rạp"
          name="cinemas"
          rules={[{ required: true, message: "Rạp không được để trống!" }]}
        >
          <Select placeholder="Chọn rạp">
            {cinemas.map((item) => (
              <Option key={item._id} value={item._id}>
                {item.cinemaName}
              </Option>
            ))}
          </Select>
        </Form.Item>
        <Form.Item
          label="Phòng"
          name="rooms"
          rules={[{ required: true, message: "Phòng không được để trống!" }]}
        >
          <Select placeholder="Chọn phòng">
            {rooms.map((item) => (
              <Option key={item._id} value={item._id}>
                {item.nameRoom}
              </Option>
            ))}
          </Select>
        </Form.Item>
     

                </Form>
            </Modal>
        </>
    );
}

export default AdminShowtimeEdit;