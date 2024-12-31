import React, { useState,useEffect } from 'react'
import Email from '../../Image/Email.svg'
import Phone from '../../Image/Phone.svg'
import Whatsapp from '../../Image/Whatsapp.svg'
import Flag from '../../Image/Flag.svg'
import { API_URL } from '../..';
const Topbar = () => {
    const [data, setData] = useState([])
        
    useEffect(() => {
        getMainpageCmsdata()
    }, [])

    const getMainpageCmsdata = async () => {
        try {
            const requestOptions = {
            method: 'GET',
            }
            await fetch(`${API_URL}/api/get_mainpage`, requestOptions)
            .then(response => response.json())
            .then((data) => {
                if (data.status === 200) {
                    setData(data.data)
                }
            })
    
        } catch (error) {
            console.log("error", error)
        }
    }

    return (
        <div>
            <div className="top_menu">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="region region-header-top" style={{marginRight:'15px'}}>
                                <section
                                    id="block-contactheadertops-2"
                                    className="block block-block-content block-block-contentef70f455-1066-4b8c-8176-5f1c996c1445 clearfix"
                                >
                                    <div className="layout layout--onecol">
                                        <div className="layout__region layout__region--content">
                                            <section className="block block-layout-builder block-field-blockblock-contentbasicbody clearfix">
                                                <div className="field field--name-body field--type-text-with-summary field--label-hidden field--item">
                                                    <ul>
                                                        <li>
                                                            <span className="info-header-icons">
                                                                <img src={Email} alt="phone" />
                                                            </span>
                                                            <span className="info-header-text">Email: </span>
                                                            <a href="mailto:">{data.email}</a>
                                                        </li>
                                                        <li>
                                                            <span className="info-header-icons">
                                                                <img src={Phone} alt="phone" />
                                                            </span>
                                                            <span className="info-header-text">Call us: </span>
                                                            <a href={`tel:${data.call_us}`}>{data.call_us}</a>
                                                        </li>
                                                        <li className="Whatsapp">
                                                            <span className="info-header-icons">
                                                                <img src={Whatsapp}  alt="phone" />
                                                            </span>
                                                            <span className="info-header-text">Whatsapp: </span>
                                                            <a href={`https://wa.me/${data.whastapp}`}>{data.whastapp}</a>
                                                        </li>
                                                        {/* <li>
                                                            <a href="/">
                                                                <img style={{width:'30px'}}
                                                                    alt="UAE Flag"
                                                                    data-entity-type="file"
                                                                    data-entity-uuid="cfbcc829-2d7a-4ff3-a984-df9b08919cde"
                                                                    src={Flag}
                                                                />
                                                            </a>
                                                        </li> */}
                                                    </ul>
                                                </div>
                                            </section>
                                        </div>
                                    </div>
                                </section>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Topbar