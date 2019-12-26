// A Smooth Sea Never Made a Skilled Sailor // 
import React from 'react';
import { connect } from 'react-redux';
import { checkStationAvailability } from '../../util/APIUtils';
import './AddChargingStation.css';
import { link } from 'react-router-dom';

import { 
	STATION_NAME, STATION_MIN_LENGTH, STATION_MAX_LENGTH, ADDRESS_MAX_LENGTH, COUNTRY, STATE,CITY, ZIPCODE, CONTACT_PERSON_NAME, CONTACT_NUMBER
} from'../../constants';

import { form, Input, Button, notification} from 'antd';
const formItem=form.Item;

class AddChargingStation extends React.Component {
	static propTypes = {
		add: React.PropTypes.string,
	};

	constructor(props) {
		super(props);
		this.state= {
			station_name: {
				value: ''
			}
			address: {
				value: ''
			}
			country: {
				value: ''
			}
			state_: {
				value: ''
			}
			city: {
				value: ''
			}
			zipcode: {
				value: ''
			}
			contact_person_name: {
				value: ''
			}
			contact_number: {
				value: ''
			}
			mail: {
				value: ''
			}
		}
	
		this.handleInputChange= this.
			handleInputChange.bind(this);
		this.handleSubmit = this.
			handleSubmit.bind(this);
		//handle station availability
		this.validateStationAvailability = this.
		validateStationAvailability.bind(this);

		this.isFormInvalid = this.isFormInvalid.bind(this);
	}	
	//functions
	
	// *
	handleInputChange(event, ValidationFun){
		const target = event.target;
		//const input_station_name = target.station_name;
		//const input_address = target.input_address;
		//const input_country = target.country;
		//const input_state_ = target.state_;
		//const input_city = target.city
		//const input_zipcode = target.zipcode;
		//const input_contact_person_name = target.contact_person_name;
		//const input_contact_number = target.contact_number;
		//const input_mail = target.mail;
		const inputValue = target.value;

		this.setState({
			[input_station_name] : {
				value: inputValue,
				...ValidationFun(inputValue)
			}
		});
	}

	handleSubmit(event){
		event.preventDefault();

		const.addStationRequest = {
			station_name: this.state.station_name.value;
			address: this.state.address.value;
			country: this.state.country.value;
			state_: this.state.state_.value;
			city: this.state.city.value;
			zipcode: this.state.zipcode.value;
			contact_person_name: this.state.contact_person_name.value;
			contact_number: this.state.contact_number.value;
		};
		addstation(addStationRequest)
		.then(response => {
			notification.success({
				message: 'Evliion App',
				description: " Thank you for adding new charging station, you are contributing towards green earth! :)",
			});
			this.props.history.push("/station");
		}).catch(error => {
			notification.error({
				message: 'Evliion App',
                description: error.message || 'Sorry! Something went wrong. Please try again!'
			});
		});
	}

	isFormInvalid() {
		return !(this.state.station_name.validateStatus === 'success' && 
			this.state.address.validateStatus === 'success' &&
			this.state.country.validateStatus === 'success' &&
			this.state.state_.validateStatus === 'success' &&
			this.state.city.validateStatus === 'success' &&
			this.state.zipcode.validateStatus === 'success' &&
			this.state.contact_person_name.validateStatus === 'success' &&
			this.state.contact_number.validateStatus === 'success'
			);
	}
	
	render() {
		return (
			<div className= 'AddChargingStation-container'>
				<h1 className="page-title">Add Charging Station </h1>
				<div className"AddChargingStation-content">
					<Form onSubmit={this.handleSubmit}
						className="AddChargingStation-form">

						<FormItem label = "Station Name" hasFeedback
							validateStatus={this.state.station_name.validateStatus}
							help={this.state.station_name.errorMsg}>
							<Input
								size="large"
								name="station_name"
								autoComplete="off"
								placeholder="Enter Station Name"
								value={this.state.station_name.value}
								onBlur={this.validateStationAvailability}
								onChange={(event) => this.
									handleInputChange(event,this.validateStationName)} />
						</FormItem>

						<FormItem label = "Address" 
							validateStatus={this.state.Address.validateStatus}
							help={this.state.Address.errorMsg}>
							<Input
								size="large"
								name="Address"
								autoComplete="off"
								placeholder="Enter Address"
								value={this.state.Address.value}
								onChange={(event) => this.
									handleInputChange(event,this.validateAddress)} />
						</FormItem>

						<FormItem label = "Country" 
							validateStatus={this.state.country.validateStatus}
							help={this.state.country.errorMsg}>
							<Input
								size="large"
								name="country"
								autoComplete="off"
								placeholder="Country"
								value={this.state.country.value}
								onChange={(event) => this.
									handleInputChange(event,this.validateCountry)} />
						</FormItem>

						<FormItem label = "State" 
							validateStatus={this.state.state_.validateStatus}
							help={this.state.state_.errorMsg}>
							<Input
								size="large"
								name="state_"
								autoComplete="off"
								placeholder="State"
								value={this.state.state_.value}
								onChange={(event) => this.
									handleInputChange(event,this.validateState_)} />
						</FormItem>

						<FormItem label = "city" 
							validateStatus={this.state.city.validateStatus}
							help={this.state.city.errorMsg}>
							<Input
								size="large"
								name="city"
								autoComplete="off"
								placeholder="city"
								value={this.state.city.value}
								onChange={(event) => this.
									handleInputChange(event,this.validateCity)} />
						</FormItem>

						<FormItem label = "zipcode" 
							validateStatus={this.state.zipcode.validateStatus}
							help={this.state.zipcode.errorMsg}>
							<Input
								size="large"
								name="zipcode"
								autoComplete="off"
								placeholder="zipcode"
								value={this.state.zipcode.value}
								onChange={(event) => this.
									handleInputChange(event,this.validateZipcode)} />
						</FormItem>

						<FormItem label = "Contact Person info" 
							validateStatus={this.state.contact_person_name.validateStatus}
							help={this.state.contact_person_name.errorMsg}>
							<Input
								size="large"
								name="contact_person_name"
								autoComplete="off"
								placeholder="Enter contact_person_name"
								value={this.state.contact_person_name.value}
								onChange={(event) => this.
									handleInputChange(event,this.validateContactPersonName)} />
						</FormItem>

						<FormItem label = "Contact Number" 
							validateStatus={this.state.contact_number.validateStatus}
							help={this.state.contact_number.errorMsg}>
							<Input
								size="large"
								name="contact_number"
								autoComplete="off"
								placeholder="Enter contact_number"
								value={this.state.contact_number.value}
								onChange={(event) => this.
									handleInputChange(event,this.validateContactPersonNumber)} />
						</FormItem>
			</div>
		);
	}

/// validation code
	validateStationName = (station_name) => {
		if(station_name.length < STATION_MIN_LENGTH){
			return {
				validateStatus:'error',
				 errorMsg: `Name is too short (Minimum ${NAME_MIN_LENGTH} characters needed.)`
			}
		} else if (station_name.length > STATION_MAX_LENGTH) {
			return {
				validateStatus: 'error',
				errorMsg: `Name is too long (Maximum ${NAME_MAX_LENGTH} characters allowed.)`
			}
		} else {
			return {
				validateStatus: 'success',
				errorMsg: null,
			};
		}
	}
	validateAddress = (name) => {
		if(station_name.length > ADDRESS_Max_LENGTH)
		{
			return {
				validateStatus: 'error',
				errorMsg: `Name is too long (Maximum ${NAME_MAX_LENGTH} characters allowed.)`
			}
		} else {
			return {
				validateStatus: 'success',
				errorMsg: null,
			};
		}
	}
	validateCountry = (country) => {
		if(!country) {
			return {
				validateStatus: 'error',
                errorMsg: 'Email may not be empty'                
			}
		}
		else if (name.length > COUNTRY) {
            return {
                validationStatus: 'error',
                errorMsg: `Name is too long (Maximum ${COUNTRY} characters allowed.)`
            }
        } else {
            return {
                validateStatus: 'success',
                errorMsg: null,
              };            
        }
	}
	validateState_ = (state_) => {
		if(!state_) {
			return {
				validateStatus: 'error',
                errorMsg: 'Email may not be empty'                
			}
		}
		else if (name.length > state_) {
            return {
                validationStatus: 'error',
                errorMsg: `Name is too long (Maximum ${state_} characters allowed.)`
            }
        } else {
            return {
                validateStatus: 'success',
                errorMsg: null,
              };            
        }
	}
	validateCity = (city) => {
		if(!city) {
			return {
				validateStatus: 'error',
                errorMsg: 'Email may not be empty'                
			}
		}
		else if (name.length > CITY) {
            return {
                validationStatus: 'error',
                errorMsg: `Name is too long (Maximum ${CITY} characters allowed.)`
            }
        } else {
            return {
                validateStatus: 'success',
                errorMsg: null,
              };            
        }
	}
	validateZipcode = (zipcode) => {
		if(!zipcode) {
			return {
				validateStatus: 'error',
                errorMsg: 'Email may not be empty'                
			}
		}
		else if (name.length > ZIPCODE) {
            return {
                validationStatus: 'error',
                errorMsg: `Name is too long (Maximum ${ZIPCODE} characters allowed.)`
            }
        } else {
            return {
                validateStatus: 'success',
                errorMsg: null,
              };            
        }
	}
	validateContactPersonName = (contact_person_name) => {
		if(!contact_person_name) {
			return {
				validateStatus: 'error',
                errorMsg: 'Email may not be empty'                
			}
		}
		else if (name.length > CONTACT_PERSON_NAME) {
            return {
                validationStatus: 'error',
                errorMsg: `Name is too long (Maximum ${CONTACT_PERSON_NAME} characters allowed.)`
            }
        } else {
            return {
                validateStatus: 'success',
                errorMsg: null,
              };            
        }
	}
	validateContactPersonNumber = (contact_number) => {
		if(!contact_number) {
			return {
				validateStatus: 'error',
                errorMsg: 'Email may not be empty'                
			}
		}
		else if (name.length > CONTACT_NUMBER) {
            return {
                validationStatus: 'error',
                errorMsg: `Name is too long (Maximum ${CONTACT_NUMBER} characters allowed.)`
            }
        } else {
            return {
                validateStatus: 'success',
                errorMsg: null,
              };            
        }
	}
	validateEmail = (email) => {
        if(!email) {
            return {
                validateStatus: 'error',
                errorMsg: 'Email may not be empty'                
            }
        }

        const EMAIL_REGEX = RegExp('[^@ ]+@[^@ ]+\\.[^@ ]+');
        if(!EMAIL_REGEX.test(email)) {
            return {
                validateStatus: 'error',
                errorMsg: 'Email not valid'
            }
        }

        if(email.length > EMAIL_MAX_LENGTH) {
            return {
                validateStatus: 'error',
                errorMsg: `Email is too long (Maximum ${EMAIL_MAX_LENGTH} characters allowed)`
            }
        }

        return {
            validateStatus: null,
            errorMsg: null
        }
    }
//validate Station availability

	validateStationAvailability() {
		// first check for any errors in station name

		const stationValue = this.state.station_name.value;
		const stationValidation = this.state.validateStationName(stationValue);

		if(stationValidation.validateStatus=== 'error')
		{
			this.setState({
				station_name: 
				{ value: stationValue, ... stationValidation}
			});
			return;
		}
		this.setState({
			station_name: {
				value: station_name,
				validateStatus: 'validating',
				errorMsg: null
			}
		});

		checkStationAvailability(stationValue)
		.then(response => {
			if(response.availabile){
				this.setState({
					station_name: {
						value: stationValue,
						validateStatus: 'success',
						errorMsg: null
					}
				});
			} else {
				this.setState({
					station_name: {
						value: stationValue,
						validateStatus: 'error',
						errorMsg: 'This Station is already taken'
					}
				});
			}
		}).catch(error=> {
			// Marking validateStatus as success, 
			//Form will be recchecked at server
			this.setState({
				station_name: {
					value: stationValue,
					validateStatus: 'success',
					errorMsg: null
				}
			});
		});
	}
//only station has to be checked 
// other fields needs to be only validate no check required as 
// each station will contain unique attributal properties.


}
export default AddChargingStation;
