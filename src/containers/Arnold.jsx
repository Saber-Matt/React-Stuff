import React, { Component } from 'react';
import { arnoldApi } from '../services/ArnoldAPI';
import ArnoldList from '../components/ArnoldList';

export default class Arnold extends Component{
state = { loading: true, arnoldApi: [] };
async componentDidMount() {
  const gotArnold = arnoldApi();
  this.setState = ({ loading:false, arnoldApi:gotArnold });
}
render(){
  const { loading, arnoldApi } = this.state;
  if(loading) return <h1>loading</h1>;
  return <ArnoldList arnoldApi={arnoldApi} />;
}
}

