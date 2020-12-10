import React, { useState } from 'react';
import './EventForm.css'



function EventForm() {
    const [submitting, setSubmitting] = useState(false);
    const handleSubmit = event => {
   event.preventDefault();
   setSubmitting(true);

   setTimeout(() => {
     setSubmitting(false);
   }, 3000)
   //alert('Thank you for submitting!')
 }
  return(
    <div className="wrapper">
      <h1>Submit Event</h1>
        {submitting &&
       <div>Submitting Event...</div>
     }
      <form onSubmit={handleSubmit}>
      <fieldset>
         <label>
           <p>Host Name</p>
            <input Hname="Host Name" />
           <p>Event Name</p>
             <input Ename="Event Name"/>
           <p>Date</p>
             <input type ="date" />
           <p>Time</p>
             <input type ="time"/>
           <p>Upload Image</p>
             <input type ="file"/>
           <p>Link</p>
             <input type ="link"/>
         </label>
       </fieldset>
       <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default EventForm;
