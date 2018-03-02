import React, { PureComponent } from 'react'
import { withRouter } from 'react-router-dom'
import s from './style.pcss'

import Header from '../../components/Header'
import Table from '../Table'

@withRouter
export default class App extends PureComponent {
  render () {
    return (
      <div className={s.app} onClick={this.handle}>
        <div className={s.content}>
          <Header/>
          <Table/>
        </div>
      </div>
    )
  }
}
