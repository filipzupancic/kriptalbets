import React, { Component } from 'react';


import eth from '../ethereum.png';
import btc from '../bitcoin.png';


class Main extends Component {

    // async componentWillMount() {
    //     await this.loadBlockchainData();
    // }

    // async loadBlockchainData() {
    //     const web3 = window.web3

    //     const accounts = await web3.eth.getAccounts()
    //     this.setState({ account: accounts[0] })

    //     const networkId = await web3.eth.net.getId()
    //     const networkData = bet.networks[networkId]
    //     if (networkData) {
    //         const Bet = web3.eth.Contract(bet.abi, networkData.address)
    //         this.setState({ Bet })
    //         this.setState({ loading: false })
    //     } else {
    //         window.alert("Bet contract not deployed to detected network")
    //     }

    // }

    render() {

        // let team0amt = this.getTotalBetAmount(0);
        // let team1amt = this.getTotalBetAmount(1);

        return (    
        <div id="content" className='text-center pt-50' style={{ alignItems: 'center', justifyContent: 'center', margin: '50px' }}>
            <div className="bg-white">
                <div className="mx-auto max-w-7xl pt-30 py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
                    <div className="text-center">
                    <h1>Place your bet</h1>
                    <p className="mt-1 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
                        If your team wins the reward will be split between winning bidders. If you lose you get nothing.
                    </p>
                    
                    </div>
                </div>
            </div>
            
            
            <br></br>

            <form onSubmit={(event) => {
            event.preventDefault()

            // document.getElementById("betamt").innerHTML = this.getTotalBetAmount("0")

            const name = this.userName.value
            const team1 = this.team1.value.toString()
            // const team = window.web3.utils.toWei(this.team.value.toString(), 'Ether')
            const betAmount = window.web3.utils.toWei(this.betAmount.value.toString(), 'Ether')
            this.props.createBet(name, team1, betAmount)
            console.log(name)
            console.log(team1)
            console.log(betAmount)
            console.log(window.web3.utils.toWei("3.4", 'Ether'))
            }}>
            <div className="form-group mr-sm-2">
                <input
                id="userName"
                type="text"
                ref={(input) => { this.userName = input }}
                className="form-control"
                placeholder="Your Name"
                required />
            </div>
            <div className="form-group mr-sm-2">
                <input
                id="team1"
                type="text"
                min="0"
                onKeyPress={(event) => {
                    if (!/[0-9]/.test(event.key)) {
                    event.preventDefault();
                    }
                }}
                ref={(input) => { this.team1 = input }}
                className="form-control"
                placeholder="Team ID [ 0/1 ]"
                required />
            </div>
            <div className="form-group mr-sm-2">
                <input
                id="team1"
                type="text"
                min="0"
                ref={(input1) => { this.betAmount = input1 }}
                className="form-control"
                placeholder="Bet Amount in Ether"
                required />
            </div>
            <button type="submit" className="btn btn-primary">Place Bet</button>
            
            </form>
            <br></br>
            <br></br>

            <h1>Game over</h1>

            <br></br>

            <form onSubmit={(event) => {
            event.preventDefault()
            const team = this.team.value
            console.log(team)
            this.props.teamWinDistribution(team)
            
            }}>
            <div className="form-group mr-sm-2">
                <input
                id="team"
                type="number"
                min="0"
                max="1"
                onKeyPress={(event) => {
                    if (!/[0-9]/.test(event.key)) {
                    event.preventDefault();
                    }
                }}
                ref={(input) => { this.team = input }}
                className="form-control"
                placeholder="Team ID [ 0/1 ]"
                required />
            </div>
            <button type="submit" className="btn btn-primary">Split the pot [Only Owner]</button>
            </form>

            <br></br>
            <br></br>

            <h1>Current Teams</h1>
            <br></br>

            <table className="table">
                
            <thead>
                <tr>
                <th scope="col">Team ID</th>
                <th scope="col"></th>
                <th scope="col">Team</th>
                <th scope="col"></th>
                <th scope="col"></th>
                <th scope="col"></th>
                {/* <th scope="col">Total Bets</th> */}
                </tr>
            </thead>
            <tbody id="currentBets" >
                <tr>
                <th scope="row">0</th>
                <td></td>
                <td><img src={eth} alt="ethereum" height="100px" /></td>
                <td></td>
                <td></td>
                <td></td>
                {/* <td id="betamt"> ETH</td> */}
                {/* <td><button className="buyButton">Buy</button></td> */}
                </tr>

                <tr>
                <th scope="row">1</th>
                <td></td>
                <td><img src={btc} alt="bitcoin" height="110px" /></td>
                <td></td>
                <td></td>
                <td></td>
                {/* <td>3 ETH</td> */}
                {/* <td><button className="buyButton">Buy</button></td> */}
                </tr>
            </tbody>
            </table>
        </div>
        );
    }
}

export default Main;