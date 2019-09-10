
    import React, { Component } from 'react';
    import logo from './logo.svg';
    import './App.css';
    import '@progress/kendo-theme-default/dist/all.css';

    // Import the Grid component.
    import { Grid, GridColumn } from '@progress/kendo-react-grid';

    class App extends Component {
      gridWidth = 1200

      constructor(props) {
        super(props);
        
        this.state = {
          data: [],
          skip: 0, 
          take: 100
        }
      }

      componentDidMount() {        
        fetch('https://jsonplaceholder.typicode.com/photos')
        .then(res => res.json())
        .then((data) => {
          this.setState({ data: data });
        })
        .catch(console.log)
      }     

      pageChange = (event) => {
          this.setState({
              skip: event.page.skip,
              take: event.page.take
          });
      }

      setPercentage = (percentage) => {
        return Math.round(this.gridWidth / 100) * percentage;
      }

      render() {
        return (
          <div className="App">
              <Grid style={{ height: '500px', width: this.gridWidth }}
                    data={this.state.data.slice(this.state.skip, this.state.take + this.state.skip)}
                    skip={this.state.skip}
                    take={this.state.take}
                    total={this.state.data.length}
                    pageable={true}
                    onPageChange={this.pageChange}>
                <GridColumn field="albumId" title="Album ID" width={this.setPercentage(10)} />
                <GridColumn field="id" title="Photo ID" width={this.setPercentage(10)} />
                <GridColumn field="title" title="Title" />
              </Grid>
          </div>
        );
      }
    }

    export default App;
