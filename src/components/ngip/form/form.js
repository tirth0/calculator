import React from 'react'
import classes from './form.module.css'

export default function Form({handleSubmit,handleInputChange,handleAddFields,handleRemoveFields,inputFields,setInputFields}) {
    return (
        <div>
           { inputFields.map((inputField, index) => (
                     <div className={classes.inputs} key={`${inputField}~${index}`}>
                       <div className={classes.formGroup}>
                         <label htmlFor="x">X value</label>
                         <input
                           type="text"
                           className="form-control"
                           id="x"
                           name="x"
                           value={inputField.x}
                           onChange={event => handleInputChange(index, event)}
                         />
                       </div>
                       <div className={classes.formGroup}>
                         <label htmlFor="y">Y value</label>
                         <input
                           type="text"
                           className="form-control"
                           id="y"
                           name="y"
                           value={inputField.y}
                           onChange={event => handleInputChange(index, event)}
                         />
                       </div>
                       <div className={classes.formGroup1}>
                         <button
                           className="btn"
                           type="button"
                           onClick={() => handleRemoveFields(index)}
                         >
                           -
                         </button>
                         <button
                           className="btn "
                           type="button"
                           onClick={() => handleAddFields()}
                         >
                           +
                         </button>
                       </div>
                     </div>
                    ))}
        </div>
    )
}
