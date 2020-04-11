import React, { Component } from "react";
import {
  Button,
  Input,
  Footer,
  Card,
  CardBody,
  CardImage,
  CardTitle,
  CardText
} from "mdbreact";

class App extends Component {
  state = {
    search: '12',
    book: []
  };

  componentDidMount() {
    fetch('/book')
      .then(res => res.json())
      .then(book => this.setState({book}, () => console.log('teacheratn fetched...', book)));
  }

  renderCountry = country => {
    const { search } = this.state;
    var code = country.Name.toLowerCase();
    return (
      <div className="col-md-3" style={{ marginTop: "20px" }}>
        <Card>
          <CardBody>
            <CardTitle title={country.Name}>
              {country.Name}
              {country.Category}
            </CardTitle>
            
          </CardBody>
        </Card>
      </div>
    );
  };

  onchange = e => {
    this.setState({ search: e.target.value });
  };

  render() {
    const { search } = this.state;
    const filteredCountries = this.state.book.filter(country => {
      return country.Name.toLowerCase().indexOf(search.toLowerCase()) !== -1;
    });

    return (
      <div className="flyout">
        <main style={{ marginTop: "4rem" }}>
          <div className="container">
            <div className="row">
              <div className="col-12">
                <center>
                </center>
              </div>
              <div className="col">
                <Input
                  label="Search Country"
                  icon="search"
                  onChange={this.onchange}
                />
              </div>
              <div className="col" />
            </div>
            <div className="row">
              {filteredCountries.map(country => {
                if(this.state.search !== 12)
                return this.renderCountry(country);
              })}
            </div>
          </div>
        </main>
      </div>
    );
  }
}

export default App;
