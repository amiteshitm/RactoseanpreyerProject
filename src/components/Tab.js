import React from 'react';
import CoolTabs from 'react-cool-tabs';
import Register from './Register';
import Login from './Login'
import '../css/LoginRegister.css'
export default class Example extends React.Component {

	render() {
		return (
			<div >
				<br />
				<div id="Tab">
					<CoolTabs
						tabKey={'1'}
						style={{ height: 550 }}
						leftTabStyle={{ marginLeft: 30 }}
						rightTabStyle={{}}
						activeTabStyle={{ background: '#FCFCFC', color: 'black', opacity: 0.7, width: 185 }}
						unActiveTabStyle={{ background: '#FCFCFC', color: 'black', opacity: 0.7, width: 185 }}
						activeLeftTabBorderBottomStyle={{ background: 'blue', height: 4, width: 185, marginLeft: 30 }}
						activeRightTabBorderBottomStyle={{ background: 'blue', height: 4, width: 185, marginLeft: 30 }}
						tabsBorderBottomStyle={{ background: 'orange', height: 4, alignitems: 'center', marginLeft: 30, width: 370 }}
						leftContentStyle={{ background: 'none', marginLeft: 0 }}
						rightContentStyle={{ background: 'none', marginLeft: 0 }}
						leftTabTitle={"SIGN IN"}
						rightTabTitle={"SIGN UP"}
						leftContent={<Login />}
						rightContent={<Register />}
						contentTransitionStyle={'transform 0.6s ease-in'}
						borderTransitionStyle={'all 0.6s ease-in'}
					/>
				</div>
			</div>
		);
	}
}

