import React from 'react';
import { PropTypes } from 'prop-types';
import FormInput from './FormInput';


const BoardForm = ({onChange, onSave, readContent, isActivate, buttonName}) => {
    return (
        <form>
            <br/><br/><br/>
            <FormInput 
                name="name" 
                label="API 상품 이름" 
                onChange={onChange}
                defaultValue={readContent.name}
                disabled={isActivate} 
            />
            <FormInput 
                name="ID" 
                label="API ID" 
                onChange={onChange}
                defaultValue={readContent.ID}
                disabled={isActivate}
            />
            <div className="form-group">
                <label htmlFor="content">Base Url</label>
                <textarea 
                    name="content" 
                    id="content" 
                    className="form-control"
                    onChange={onChange} 
                    defaultValue={readContent.content}
                    disabled={isActivate}></textarea>
            </div>
            <input 
                type="button"
                value={buttonName}
                onClick={onSave}
            />
        </form>
    );
}

BoardForm.propTypes = {
    onChange: PropTypes.func.isRequired,
    onSave: PropTypes.func.isRequired,
    readContent: PropTypes.object.isRequired,
    isActivate: PropTypes.bool.isRequired,
    buttonName: PropTypes.string.isRequired
}

export default BoardForm;



