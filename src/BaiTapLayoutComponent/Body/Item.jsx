import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import placeholderImg from './Img/img-1.jpg'

const Item = ({text}) => {
    return (
        <div className="card text-center border border-0" style={{width: '18rem'}}>
            <img className="card-img-top rounded" src={placeholderImg} alt="500 x 325" />
            <div className="card-body">
                <div className="bg-light-subtle" style={{minHeight: 300}}>
                    <h1 className="card-title">Card title</h1>
                    <p className="card-text p-3">{text}</p>
                </div>
                <div className="text-center mx-auto py-3 bg-light">
                    <button className="btn btn-primary">Find out more!</button>
                </div>
            </div>
        </div>
    );
};

const ItemList = () => {
    const itemText = [
        { text: 'Nulla facilisi. Maecenas dolor enim, convallis aliquet lectus vel, dignissim luctus nunc. Morbi risus tortor, tempor id efficitur at, bibendum.' },
        { text: 'Maecenas tincidunt est id ligula egestas ullamcorper. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. In aliquet tincidunt libero, et commodo mi lacinia ullamcorper. Donec fringilla efficitur nibh, a volutpat.'}, 
        { text: 'Maecenas risus arcu, varius eget libero vitae, porttitor lobortis eros. Nullam id pellentesque felis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per.'}, 
        { text: 'Nulla rutrum semper justo, sit amet auctor mauris viverra ut. Quisque lacus nunc, placerat quis feugiat eu, tristique vel enim. Morbi lacus dui, suscipit pellentesque tempor nec, venenatis ac dui.'},
    ];

    return (
        <div className="d-flex justify-content-around container mb-4">
            {itemText.map((item, index) => (
                <Item key={index} text={item.text} />
            ))}
        </div>
    );
};

export default ItemList