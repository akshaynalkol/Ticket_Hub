import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { API_KEY, IMAGE_MIN_BASE_URL } from '../../constants/ApiConstants';
import moment from 'moment';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { NavLink } from 'react-router-dom';

export default function SimilarMovie({ id }) {
    const [data, setData] = useState([]);

    const getData = async () => {
        const res = await axios.get(`https://api.themoviedb.org/3/movie/${id}/similar?api_key=${API_KEY}&language=en-US&page=1`);
        console.log(res.data);
        console.log(res.data.results);

        setData(res.data.results);
    }

    useEffect(() => {
        getData();
    }, [id]);

    const setting = {
        arrows: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        // autoplay: true,
        // autoplaySpeed: 1000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    infinite: true,
                    arrows: true
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    arrows: false
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    arrows: false
                }
            }
        ]
    };

    return (
        <>
            <div className='container-fluid '>
                <h3 className='fw-bold mb-4'>Similar Movie</h3>
                <div className='row mb-4 px-lg-5'>
                    <Slider {...setting}>
                        {
                            data.map((val, index) => {
                                return (
                                    <NavLink to={`/movie_details/${val.id}`} className="text-decoration-none">
                                        <div key={index} className='card border-0'>
                                            <img src={`${IMAGE_MIN_BASE_URL}${val.poster_path}`} className='card-img' />
                                            <div className='card-body p-0 pt-2'>
                                                <h5 className='card-title text-wrap'>{val.title}</h5>
                                                <p>
                                                    {moment(val.release_date).format('MMM Do YYYY')}
                                                    <span className='badge text-bg-dark float-end'>Ratng {Number(val.vote_average).toFixed(1)}</span>
                                                </p>
                                            </div>
                                        </div>
                                    </NavLink>
                                )
                            })
                        }
                    </Slider>
                </div>
            </div>
        </>
    )
}
