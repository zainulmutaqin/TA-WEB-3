import React, { Component } from 'react';

class Profile extends Component {
    state = {  }
    render() { 
        return (
            <React.Fragment>
                <section className="gray-bg section-padding" id="feature-page">
                    <div className="container">
                        <div className="row">
                            <div className="col-xs-12 col-sm-6 col-sm-offset-3 text-center">
                                <div className="page-title">
                                    <img className="img-fluid mb-5 d-block mx-auto" src="images/dianing.jpeg" width="240" height="320" alt="inidianq" aria-label="dianq"/>
                                    <h1 className="text-uppercase mb-0">Dianing Sukmapilia</h1>
                                    <h5 className="font-weight-light mb-0">Cewek yang selalu senyum dan bahagia</h5>                   
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div style={{textAlign:"center"}}>
                            DATA DIRI SAYA
                        </div>
                        <div>
                            <table>
                                <tr> 
                                    <td width="750" align="center"> Nama </td>
                                    <td width="750"> Dianing Sukmapilia Putri Samsudin</td>
                                </tr>
                                <tr> 
                                    <td width="750" align="center"> TTL </td>
                                    <td width="750"> Jombang, 2 Desember 1998</td>
                                </tr>
                                <tr> 
                                    <td width="750" align="center"> Alamat  </td>
                                    <td width="750"> Perumahan Mojongapit C/5, Jombang, Jawa Timur</td>
                                 
                                </tr>
                                <tr> 
                                    <td width="750" align="center">   </td>
                                    <td width="750"> Kamar C4, Tectona House, Jl Wahid Hasyim No 26 E, Sleman, Yogyakarta</td>
                                 
                                </tr>
                                <tr> 
                                    <td width="750" align="center"> Alamat  </td>
                                    <td width="750"> Perumahan Mojongapit C/5, Jombang, Jawa Timur</td>
                                </tr>
                                <tr> 
                                    <td width="750" align="center"> Hobby  </td>
                                    <td width="750"> Renang, Membaca, dan Bernyanyi </td>
                                 
                                </tr>
                                <tr> 
                                    <td width="750" align="center"> Riwayat pendidikan  </td>
                                    <td width="750"> TK Muslimat 3</td>
                                 
                                </tr>
                                <tr> 
                                    <td width="750" align="center">  </td>
                                    <td width="750"> SDN Jombang 2</td>
                                 
                                </tr>
                                <tr> 
                                    <td width="750" align="center">  </td>
                                    <td width="750"> SMPN 1 Jombang </td>
                                 
                                </tr>
                                <tr> 
                                    <td width="750" align="center">  </td>
                                    <td width="750"> SMAN Mojoangung</td>
                                 
                                </tr>
                                <tr> 
                                    <td width="750" align="center">  </td>
                                    <td width="750"> D3 Komputer dan Sistem Informasi, Universitas Gadjah Mada</td>
                                 
                                </tr>
                                <tr> 
                                    <td width="750" align="center">  </td>
                                    <td width="750"> SDN Jombang 2</td>
                                 
                                </tr>
                                <tr> 
                                    <td width="750" align="center"> No Handphone </td>
                                    <td width="750"> 081335174552</td>
                                 
                                </tr>
                                <tr> 
                                    <td width="750" align="center"> E-mail  </td>
                                    <td width="750"> dianingsukmapilia@gmail.com</td>
                                 
                                </tr>
                                <tr> 
                                    <td width="750" align="center">  </td>
                                    <td width="750"> SDN Jombang 2</td>
                                 
                                </tr>
                            </table>
                        </div>
                    </div>
                </section>
            </React.Fragment>
         );
    }
}
 
export default Profile;