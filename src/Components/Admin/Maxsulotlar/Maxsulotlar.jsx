import React from 'react'
import Navbar from './../Navbar/Navbar'
import { useParams } from 'react-router-dom'
import plus from './../../../images/plus.png'
function Maxsulotlar() {
    const params = useParams()
    return (
        <div>
            <div>
                <Navbar />
                <main class="col-md-9 ml-sm-auto col-lg-10 px-md-4 maindashboard">
                    <div
                        class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                        <h6 class="h6">home/kategoriya</h6>
                        <div class="btn-toolbar mb-2 mb-md-0">
                            <button type="button" class="btn btn-sm btn-outline-success">
                                <span data-feather="calendar"></span>
                                Qoshish <img src={plus} />
                            </button>
                        </div>
                    </div>
                    <div class="table-responsive">
                        <table class="table">
                            <thead>
                                <tr className='bg-dark text-light'>
                                    <th className='p-2'>kategoriya</th>
                                    <th className='p-2'>DO’konlar</th>
                                    <th className='p-2'>tahrirlash</th>
                                    <th className='p-2'>status</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className='p-2'>1,001</td>
                                    <td className='p-2'>Lorem</td>
                                    <td className='p-2'>ipsum</td>
                                    <td className='p-2'>dolor</td>
                                </tr>
                                <tr>
                                    <td className='p-2'>1,001</td>
                                    <td className='p-2'>Lorem</td>
                                    <td className='p-2'>ipsum</td>
                                    <td className='p-2'>dolor</td>
                                </tr>
                                <tr>
                                    <td className='p-2'>1,001</td>
                                    <td className='p-2'>Lorem</td>
                                    <td className='p-2'>ipsum</td>
                                    <td className='p-2'>dolor</td>
                                </tr>
                                <tr>
                                    <td className='p-2'>1,001</td>
                                    <td className='p-2'>Lorem</td>
                                    <td className='p-2'>ipsum</td>
                                    <td className='p-2'>dolor</td>
                                </tr>
                                <tr>
                                    <td className='p-2'>1,001</td>
                                    <td className='p-2'>Lorem</td>
                                    <td className='p-2'>ipsum</td>
                                    <td className='p-2'>dolor</td>
                                </tr>
                                <tr>
                                    <td className='p-2'>1,001</td>
                                    <td className='p-2'>Lorem</td>
                                    <td className='p-2'>ipsum</td>
                                    <td className='p-2'>dolor</td>
                                </tr>
                                <tr>
                                    <td className='p-2'>1,001</td>
                                    <td className='p-2'>Lorem</td>
                                    <td className='p-2'>ipsum</td>
                                    <td className='p-2'>dolor</td>
                                </tr>
                                <tr>
                                    <td className='p-2'>1,001</td>
                                    <td className='p-2'>Lorem</td>
                                    <td className='p-2'>ipsum</td>
                                    <td className='p-2'>dolor</td>
                                </tr>
                                <tr>
                                    <td className='p-2'>1,001</td>
                                    <td className='p-2'>Lorem</td>
                                    <td className='p-2'>ipsum</td>
                                    <td className='p-2'>dolor</td>
                                </tr>
                                <tr>
                                    <td className='p-2'>1,001</td>
                                    <td className='p-2'>Lorem</td>
                                    <td className='p-2'>ipsum</td>
                                    <td className='p-2'>dolor</td>
                                </tr>
                                <tr>
                                    <td className='p-2'>1,001</td>
                                    <td className='p-2'>Lorem</td>
                                    <td className='p-2'>ipsum</td>
                                    <td className='p-2'>dolor</td>
                                </tr>
                                <tr>
                                    <td className='p-2'>1,001</td>
                                    <td className='p-2'>Lorem</td>
                                    <td className='p-2'>ipsum</td>
                                    <td className='p-2'>dolor</td>
                                </tr>
                                <tr>
                                    <td className='p-2'>1,001</td>
                                    <td className='p-2'>Lorem</td>
                                    <td className='p-2'>ipsum</td>
                                    <td className='p-2'>dolor</td>
                                </tr>
                                <tr>
                                    <td className='p-2'>1,001</td>
                                    <td className='p-2'>Lorem</td>
                                    <td className='p-2'>ipsum</td>
                                    <td className='p-2'>dolor</td>
                                </tr>
                                <tr>
                                    <td className='p-2'>1,001</td>
                                    <td className='p-2'>Lorem</td>
                                    <td className='p-2'>ipsum</td>
                                    <td className='p-2'>dolor</td>
                                </tr>
                                <tr>
                                    <td className='p-2'>1,001</td>
                                    <td className='p-2'>Lorem</td>
                                    <td className='p-2'>ipsum</td>
                                    <td className='p-2'>dolor</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </main>
            </div>
        </div>
    )
}

export default Maxsulotlar
