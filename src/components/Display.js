import React from 'react';

const onUpdate = (e) => {
        let x = prompt('enter title');
        let y = prompt('enter Desc');
        fetch('https://growthplug-facebook.herokuapp.com/update_data/'+e.currentTarget.getAttribute('id'), {
          method:'post',
          body:x+','+y
        })
        .then(response => response.json())
        .then(data => {
        if(data){
          console.log(data);
        }
        });
}

const onDelete = (e) => {
      fetch('https://growthplug-facebook.herokuapp.com/delete_data/'+e.currentTarget.getAttribute('id'), {
        method:'post',
        body:e.currentTarget.getAttribute('id')
      })
      .then(response => response.json())
      .then(data => {
      if(data){
        console.log(data);
      }
    });
}

const Display = ({data}) => {
  return (
    <div>
      {
      data.map((user,i) => {
        return (
          <div className='tc bg-light-green dib pa4 br3 ma3 grow bw2 shadow-5'>
            <div>
              <a onClick={onDelete} id={data[i].id} className="f10 link dim ba bw1 ph3 pv2 mb2 dib dark-pink shadow-5 pointer">Remove Card
              </a>
              <div className="tc">
                <h1 className="f4">{data[i].title}
                </h1>
                <hr className="mw3 bb bw1 b--black-10" />
              </div>
              <p className="lh-copy measure center f6 black-70">
                {data[i].desc}
              </p>
              <a onClick={onUpdate} id={data[i].id} className="f6 link dim ba bw1 ph3 pv2 mb2 dib dark-blue shadow-5 pointer" value="1">Update Card</a>
            </div>
          </div>
        );
      })
    }
    </div>

  );
}



export default Display;
