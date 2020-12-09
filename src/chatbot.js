import React, { Component } from 'react';
import ChatBot from 'react-simple-chatbot';
import './App.css';
class SimpleForm extends Component {
    state = {opened: this.props.opened}
  toggleFloating = ({ opened }) => {this.setState({ opened });}
    render() {
        const { opened } = this.state;
        return (
            <ChatBot
                headerTitle="InfoToIntell"
                botDelay="1000"
                floating={true}
                opened={opened}
                toggleFloating={this.toggleFloating}
                steps={[
                    {
                        id: '1',
                        message: 'What Your Name?',
                        trigger: '2',
                    },
                    {
                        id: '2',
                        user: true,
                        trigger: '3',
                    },
                    {
                        id: '3',
                        message: 'Hi {previousValue}, nice to meet you!',
                        end: true,
                    },
                ]}
            />
        );
    }
}
export default SimpleForm;