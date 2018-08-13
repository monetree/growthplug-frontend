import React from 'react';
import Modal from 'react-responsive-modal';

class Post extends React.Component {
  state = {
    open: false,
  };
  constructor(props){
  super(props);
  this.state = {
    title: '',
    desc: ''
  }
}

onTitleChange = (event) => {
  this.setState({title:event.target.value})
}

onDescChange = (event) => {
  this.setState({desc:event.target.value})
}



onSubmitData = () => {
  fetch('https://growthplug-facebook.herokuapp.com/post/', {
    method:'post',
    headers:{'Content-Type':'application/json'},
    body:this.state.title+','+this.state.desc
  })
.then(response => response.json())
.then(code => {
  if(code){
    console.log(code);
  }
})
this.onCloseModal();
}


  onOpenModal = () => {
    this.setState({ open: true });
  };

  onCloseModal = () => {
    this.setState({ open: false });
  };



  render() {
    const { open } = this.state;
    return (
      <div>
        <a onClick={this.onOpenModal} className="f4 link dim ba bw1 ph5 pv2 mb2 dib dark-blue shadow-5 pointer">Post Data</a>

        <Modal open={open} onClose={this.onCloseModal} center>
          <div className='tc bg-light-green dib pa4 br3 ma3 grow bw2 shadow-5'>
           <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
             <legend className="f1 fw6 ph0 mh0">Register</legend>
             <div className="mt3">
               <label className="db fw6 lh-copy f6" htmlFor="name">Title</label>
               <input
                 className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                 type="text"
                 name="title"
                 id="title"
                 onChange={this.onTitleChange}
               />
             </div>
             <div className="mt3">
               <label className="db fw6 lh-copy f6" htmlFor="email-address">Desc</label>
               <input
                 className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                 type="text"
                 name="desc"
                 id="desc"
                 onChange={this.onDescChange}
               />
             </div>
           </fieldset>
           <div className="">
             <input
               onClick = {this.onSubmitData}
               className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib pointer"
               type="submit"
               value="Submit"
              />
           </div>
         </div>
        </Modal>
      </div>
    );

  }
}



export default Post;
