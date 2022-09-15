import React, { Component } from 'react'

export default class ChonKinh extends Component {
    productList = [
        {
            "id": 1,
            "price": 30,
            "name": "GUCCI G8850U",
            "url": "./glassesImage/v1.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 2,
            "price": 50,
            "name": "GUCCI G8759H",
            "url": "./glassesImage/v2.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 3,
            "price": 30,
            "name": "DIOR D6700HQ",
            "url": "./glassesImage/v3.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 4,
            "price": 70,
            "name": "DIOR D6005U",
            "url": "./glassesImage/v4.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 5,
            "price": 40,
            "name": "PRADA P8750",
            "url": "./glassesImage/v5.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 6,
            "price": 60,
            "name": "PRADA P9700",
            "url": "./glassesImage/v6.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 7,
            "price": 80,
            "name": "FENDI F8750",
            "url": "./glassesImage/v7.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 8,
            "price": 100,
            "name": "FENDI F8500",
            "url": "./glassesImage/v8.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 9,
            "price": 60,
            "name": "FENDI F4300",
            "url": "./glassesImage/v9.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        }
    ]

    state = {
        name: "GUCCI G8850U",
        url: "./glassesImage/v1.png",
        desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
    }

    changerGlass = (getID) => {
        let product = this.productList.find((glass) => {
            return glass.id == getID;
        })
        let { name, url, desc } = product;
        this.setState({
            name: name,
            url: url,
            desc: desc
        })
    }

    renderGlass = () => {
        return this.productList.map((glass) => {
            let { id, url } = glass;
            return <div key={id} className="col-2 py-1">
                <button onClick={() => {
                    this.changerGlass(id)
                }} className='btn shadow-none'>
                    <img className='img-fluid' src={url} alt="" />
                </button>
            </div>
        })
    }
    render() {
        return (
            <div>
                <h1 className="glass__tilte p-3">TRY GLASSES APP ONLINE</h1>
                <div className='container'>
                <div className="row p-4">
                    <div className="col-6">
                        <div className="glass__left mx-auto">
                            <div className="glass__img">
                                <img className='img-fluid' src={this.state.url} alt="" />
                            </div>
                            <div className="glass__info p-2">
                                <h6>{this.state.name}</h6>
                                <p>{this.state.desc}</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="glass__right mx-auto">
                        </div>
                    </div>
                </div>
                <div className="row p-2">
                    {this.renderGlass()}
                </div>
            </div>
            </div>
            
        )
    }
}
