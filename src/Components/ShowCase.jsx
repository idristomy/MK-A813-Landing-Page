import img2 from '../Images/img6.PNG'
import img3 from '../Images/img7.PNG'
import img4 from '../Images/img3.jpg'
import img5 from '../Images/img4.jpg'
import Label from '../Images/RollsLabel.jpg'
import { useState } from 'react'

function ShowCase() {

    const [States, setStates] = useState(
        [
            { id: "01", name: "ALGER", price: 450, halfPrice: 225 },
            { id: "02", name: "BLIDA", price: 600, halfPrice: 300 },
            { id: "03", name: "BOUMARDAS", price: 650, halfPrice: 325 },
            { id: "04", name: "TIPAZA", price: 700, halfPrice: 350 },
            { id: "05", name: "TIZI OUZOU", price: 720, halfPrice: 360 },
            { id: "06", name: "ORAN", price: 750, halfPrice: 375 },
            { id: "07", name: "BOUIRA", price: 750, halfPrice: 375 },
            { id: "08", name: "MEDEA", price: 750, halfPrice: 375 },
            { id: "09", name: "SETIF", price: 800, halfPrice: 400 },
            { id: "10", name: "CONSTANTINE", price: 800, halfPrice: 400 },
            { id: "11", name: "BEJAIA", price: 800, halfPrice: 400 },
            { id: "12", name: "ANNABA", price: 800, halfPrice: 400 },
            { id: "13", name: "BOURDJ BOU ARRERIDJ", price: 800, halfPrice: 400 },
            { id: "14", name: "JIJEL", price: 800, halfPrice: 400 },
            { id: "15", name: "AIN DEFLA", price: 800, halfPrice: 400 },
            { id: "16", name: "AIN TIMOUCHENT", price: 850, halfPrice: 425 },
            { id: "17", name: "OUM EL NOUAGHI", price: 850, halfPrice: 425 },
            { id: "18", name: "BATNA", price: 850, halfPrice: 425 },
            { id: "19", name: "TEBESSA", price: 850, halfPrice: 425 },
            { id: "20", name: "SAIDA", price: 850, halfPrice: 425 },
            { id: "21", name: "SKIKDA", price: 850, halfPrice: 425 },
            { id: "22", name: "SIDI BEL ABBES", price: 850, halfPrice: 425 },
            { id: "23", name: "GUELMA", price: 850, halfPrice: 425 },
            { id: "24", name: "TAREF", price: 850, halfPrice: 425 },
            { id: "25", name: "MILA", price: 850, halfPrice: 425 },
            { id: "26", name: "MASCAR", price: 850, halfPrice: 425 },
            { id: "27", name: "KHENCHLA", price: 800, halfPrice: 400 },
            { id: "28", name: "MSILA", price: 600, halfPrice: 300 },
            { id: "29", name: "TIARET", price: 500, halfPrice: 250 },
            { id: "30", name: "TISSEMSILT", price: 880, halfPrice: 440 },
            { id: "31", name: "SOUK AHRAS", price: 880, halfPrice: 440 },
            { id: "32", name: "RELIZANE", price: 880, halfPrice: 440 },
            { id: "33", name: "TELEMCENT", price: 900, halfPrice: 450 },
            { id: "34", name: "EL OUD", price: 930, halfPrice: 465 },
            { id: "35", name: "OUREGLA", price: 950, halfPrice: 475 },
            { id: "36", name: "BISKRA", price: 950, halfPrice: 475 },
            { id: "37", name: "OULED DJELLAL", price: 950, halfPrice: 475 },
            { id: "38", name: "DJELFA", price: 950, halfPrice: 475 },
            { id: "39", name: "LAGOUATE", price: 950, halfPrice: 475 },
            { id: "40", name: "TOUGGOURT", price: 950, halfPrice: 475 },
            { id: "41", name: "EL BAYADH", price: 980, halfPrice: 490 },
            { id: "42", name: "M'GHAIR", price: 980, halfPrice: 490 },
            { id: "43", name: "MENIAA", price: 980, halfPrice: 490 },
            { id: "44", name: "NAAMA", price: 1000, halfPrice: 500 },
            { id: "45", name: "BECHAR", price: 1000, halfPrice: 500 },
            { id: "46", name: "GHERDAIA", price: 1000, halfPrice: 500 },
            { id: "47", name: "BENI ABBES", price: 1000, halfPrice: 500 },
            { id: "48", name: "ADRAR", price: 1250, halfPrice: 625 },
            { id: "49", name: "TIMIMOUN", price: 1300, halfPrice: 650 },
            { id: "50", name: "TAMANRASSET", price: 1500, halfPrice: 750 },
            { id: "51", name: "AIN SALAH", price: 1500, halfPrice: 750 },
            { id: "52", name: "AIN GUZZAM", price: 1500, halfPrice: 750 },
            { id: "53", name: "ILLIZI", price: 1500, halfPrice: 750 },
            { id: "54", name: "BOURDJ BADJI MOKHTAR", price: 1500, halfPrice: 750 },
            { id: "55", name: "DJANET", price: 15000, halfPrice: 7500 },
            { id: "56", name: "TINDOUF", price: 1500, halfPrice: 750 }
        ]
    );

    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [selectedState, setSelectedState] = useState('');
    const [city, setCity] = useState('');
    const [deliveryPrice, setDeliveryPrice] = useState(0); // store delivery price
    const [isRollsAdded, setIsRollsAdded] = useState(false); // state for checkbox

    // Handle the changes in the form inputs
    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === 'name') setName(value);
        if (name === 'phone') setPhone(value);
        if (name === 'state') {
            const selectedState = States.find(state => state.name === value);
            setSelectedState(selectedState ? selectedState.name : '');
            setDeliveryPrice(selectedState ? selectedState.halfPrice : 0);
        }
        if (name === 'city') setCity(value);
        if (name === 'rollsCheckbox') setIsRollsAdded(e.target.checked); // Handle checkbox change
    }

    // Calculate the total price including the optional rolls
    const totalPrice = 2900 + deliveryPrice + (isRollsAdded ? 500 : 0);


    function Submit(e){
        const formEle = document.querySelector("form")
        e.preventDefault()
        console.log("submitted")
        const formData = new FormData(formEle)
        fetch("https://script.google.com/macros/s/AKfycbzS2xjr6zZ_Sdq0Us7F18Udnko5lIso2-RNepjGVVoB04P-cW9AvtAC9s0xBCOLPmIDlA/exec", {
            method: "POST",
            body: formData,
        })
        setTimeout(() =>{
            alert('تم ارسال طلبك بنجاح سوف يتم التواصل مع في اقرب وقت')
        }, 1000)
    }


    return (
        <section id='product' className='showCase'>
            <div className="container py-5 ">
                <div className="row">
                    <div className="col-lg my-5">
                        <div className="order-form-container">
                            <h2>اشتري جهاز وسم الأسعار MK-A813 الآن</h2>
                            <p><del>3400da</del> 2900da</p>
                            <form className='form' onSubmit={(e) => Submit(e)}>
                                <div className="row">
                                    <div className="col">
                                        <label>الاسم الكامل :  </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="الاسم الكامل"
                                            value={name}
                                            onChange={handleChange}
                                            name="name"
                                            required
                                        />
                                    </div>
                                    <div className="col">
                                        <label>رقم الهاتف :</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="رقم الهاتف"
                                            value={phone}
                                            onChange={handleChange}
                                            name="phone"
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="row my-4">
                                    <div className="col">
                                        <label>إختر الولاية :</label>
                                        <select
                                            className="form-control"
                                            value={selectedState}
                                            onChange={handleChange}
                                            name="state"
                                            required
                                        >
                                            <option value="">اختر ولايتك</option>
                                            {States.map((state) => (
                                                <option key={state.id} value={state.name}>
                                                    {state.name}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                    <div className="col">
                                        <label> البلدية :</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="اكتب بلديتك"
                                            value={city}
                                            onChange={handleChange}
                                            name="city"
                                            required
                                        />
                                    </div>
                                    <div className="form-check my-3 d-flex align-items-center">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            value=""
                                            id="defaultCheck1"
                                            name="rollsCheckbox"
                                            checked={isRollsAdded}
                                            onChange={handleChange}
                                        />
                                        <label className="form-check-label mx-4" htmlFor="defaultCheck1">
                                            اضف 10 لفات بسعر 500 دج فقط!
                                        </label>
                                        <img src={Label} alt="" />
                                    </div>
                                </div>
                                <div className="order">
                                    <h5>ملخص الطلبية :</h5>
                                    <div className="brief-order">
                                        <p className="brief-p"> سعر المنتج: 2900 دج</p>
                                        <p className="brief-p"> سعر التوصيل: {deliveryPrice} دج</p>
                                        {isRollsAdded ? <p className="brief-p">10 لفات : 500 دج</p>
                                        : ''}
                                        <hr />
                                        <p className="brief-p">مبلغ الإجمالي: {totalPrice} دج</p>
                                    </div>
                                </div>
                                <div className="button">
                                    <button className="btn btn-warning " type='submit'>تأكيد الطلبية</button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="col-lg">
                        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img className="d-block w-100" src={img2} alt="First slide" />
                                </div>
                                <div className="carousel-item">
                                    <img className="d-block w-100" src={img3} alt="Second slide" />
                                </div>
                                <div className="carousel-item">
                                    <img className="d-block w-100" src={img4} alt="Third slide" />
                                </div>
                                <div className="carousel-item">
                                    <img className="d-block w-100" src={img5} alt="Fourth slide" />
                                </div>
                            </div>
                            <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                                <span className="carousel-control-prev-icon icon-move" aria-hidden="true"></span>
                            </a>
                            <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                                <span className="carousel-control-next-icon icon-move" aria-hidden="true"></span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ShowCase;
