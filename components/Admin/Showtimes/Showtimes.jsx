import React, { useEffect, useState } from 'react'
import classNames from 'classnames';
import moment from 'moment';
import { Table, Tag, Space, Popconfirm, message } from 'antd';

import numberFormat from '../../../utils/modules/numberFormat';
import apiService from '../../../utils/api/apiService';
import AdminShowtimeEdit from './Edit';

export default function AdminShowtimes() {
    const [showtimes, setShowtimes] = useState([]);
    const [loading, setLoading] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [showtimeDetail, setShowtimeDetails] = useState({});

    const getShowtimes = async () => {
        try {
            setLoading(true);
            const response = await apiService.get('/showtimes');
            const responseCinemas = await apiService.get('/cinemas/getAllCinemas');
            const responseMovies = await apiService.get('/movies/getallmovie');
            const responseRooms = await apiService.get('/rooms');

            const showtimesData = response.data.map((showtime) => {
                const cinema = responseCinemas.data.find(cinema => showtime.cinemas === cinema._id);
                const movie = responseMovies.data.find(movie => showtime.movies === movie._id);
                const room = responseRooms.data.find(room => showtime.rooms === room._id);
                return { ...cinema, ...movie, ...room, ...showtime };
            })
            setShowtimes(showtimesData);
            console.log(showtimesData);

            setLoading(false);
        } catch (error) {
            console.log(error);
        }
    }

    const columns = [
        {
            title: 'Phim',
            dataIndex: 'movieImg',
            key: 'movieImg',
            render: img => <div className="flex items-center">
                <img width={120} src={img} alt="Phim rạp" />
            </div>,
        },
        {
            title: 'Rạp',
            dataIndex: 'cinemaName',
            key: 'cinemaName',
            // render: text => <a>{text}</a>,
        },
        {
            title: 'Phòng',
            dataIndex: 'nameRoom',
            key: 'nameRoom',
        },
        {
            title: 'Giá vé',
            dataIndex: 'price',
            key: 'price',
            render: price => <span>{numberFormat(price)} đồng</span>,
        },

        {
            title: 'Trạng thái',
            key: 'seats',
            dataIndex: 'seats',
            render: seats => {
                const bookedSeats = seats.filter(seat => seat.status);
                return (
                    <>
                        <Tag color={(bookedSeats.length - seats.length) === 0 ? 'volcano' : 'green'}>
                            {bookedSeats.length}/{seats.length}
                        </Tag>
                    </>
                )
            },
        },
        {
            title: 'Action',
            key: 'action',
            render: (text, record) => (
                <Space size="middle">
                    {/* <a>Invite {record.name}</a> */}
                    <Popconfirm
                        title={record.status ? `Suất chiếu "${record.title}" ở phòng "${record.nameRoom}" rạp "${record.cinemaName}" sẽ tạm ngừng?`
                            : `Suất chiếu "${record.title}" sẽ được hoạt động?`}
                        onConfirm={() => updateStatusUser(record._id, !record.status)}
                        okText={record.status ? "Tạm dừng" : "Hoạt động"}
                        cancelText="Hủy"
                    >
                        <a className={classNames('', {
                            "hover:text-red-400": record.status,
                            "hover:text-green-400": !record.status
                        })}>{record.status ? 'Tạm dừng' : "Hoạt động"}</a>
                    </Popconfirm>
                </Space>
            ),
        },
    ];

    useEffect(() => {
        getShowtimes();
    }, [])
    return (
        <div>
            <Table
                onRow={(record, rowIndex) => {
                    return {
                        onClick: () => {
                            setShowModal(true)
                            setShowtimeDetails(record)
                        }
                    }
                }
                }
                loading={loading}
                columns={columns} dataSource={showtimes}
                pagination={{ defaultPageSize: 6 }}
                scroll={{ y: 500 }} />
                 <AdminShowtimeEdit showModal={showModal} setShowModal={setShowModal} showtimeDetail={showtimeDetail}  />
        </div>
    )
}
