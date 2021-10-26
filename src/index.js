// Core
import { render } from 'react-dom';
import { configure } from 'mobx';

// Components
import { App } from './App';

// Instruments
import './theme/init.scss';

configure({
    enforceActions:             'always',
    computedRequiresReaction:   true,
    observableRequiresReaction: true,
    reactionRequiresObservable: true,
});

render(
    <App />,
    document.getElementById('root'),
    () => {
        // eslint-disable-next-line no-console
        console.log('%c Приложение успешно запущено ', 'background: #00ff00; color: #000000; padding: 2.5px;');
    },
);
