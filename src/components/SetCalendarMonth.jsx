import React, { useState } from 'react'
import Calendar from "./Calendar"
import ReactModal from 'react-modal'


export default function SetCalendarMonth({date, months, thisMonthNumber, thisMonthName}) {
    const {calendarMonth, setCalendarMonth} = useState()
    

        // constructor () {
    //     super();
    //     this.state = {
    //       showModal: false
    //     };
        
    //     this.handleOpenModal = this.handleOpenModal.bind(this);
    //     this.handleCloseModal = this.handleCloseModal.bind(this);
    //   }
      
    //   handleOpenModal () {
    //     this.setState({ showModal: true });
    //   }
      
    //   handleCloseModal () {
    //     this.setState({ showModal: false });
    //   }
      
    // return (
    //       <div>
    //         <button onClick={this.handleOpenModal}>Trigger Modal</button>
    //         <ReactModal 
    //            isOpen={this.state.showModal}
    //            
    //         >
    //           <button onClick={this.handleCloseModal}>Close Modal</button>
    //         </ReactModal>
    //       </div>
    //     );
    //   }
    }