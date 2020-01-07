import React from 'react';
import Specialty from '../components/specialty';

class SpecialtiesList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const specialties = ['general', 'dermatology', 'oncology', 'pediatry'];

    return (
      <div className="row">
        {specialties.map((specialty) => (
          <Specialty
            key={specialty}
            specialty={specialty}
          />
        ))}
      </div>
    );
  }
}

export default SpecialtiesList;
