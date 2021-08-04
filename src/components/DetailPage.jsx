import React, { Component } from 'react';
import ArnoldDetail from '../components/hey-arnold/ArnoldDetail';
import { getArnold } from '../services/heyArnold';
import { Link } from 'react-router-dom';

export default class DetailPage extends Component {
  state = {
    arnold: {},
    loading: true,
  }

  async componentDidMount() {
    const { match } = this.props;
    
    try {
      const arnold = await getArnold(match.params.id);
      this.setState({ arnold });
    }
    catch(err) {
      console.log(err.message);
    }
    finally {
      this.setState({ loading: false });
    }
  }

  render() {
    const { arnold, loading } = this.state;
    const { match } = this.props;

    if(loading) <h1>Loading...</h1>;
    if(!arnold) return <h1>Wrong Show, Hey Arnold Get Over Here</h1>;

    return (
      <div className="Wrapper">
        <ArnoldDetail 
          id={match.params.id}
          name={arnold.name}
          image={arnold.image}
        />

        <Link to={'/'}>
            Return to All Arnold
        </Link>

      </div>
    );
  }
}
