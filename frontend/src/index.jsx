/** @jsx createElement */
import createElement from './jsx-runtime.js';

import './assets/normalize.css';
import './assets/skeleton.css';

import Title from './components/Title.jsx';
import ContentTypeTabs from './components/ContentTypeTabs/ContentTypeTabs.jsx';

const app = (
    <div class="container">
        <div class="row">
            <Title title='Relate Table' subtitle='Where data meets magic!' />
        </div>

        <div class="row">
            <ContentTypeTabs />
        </div>
    </div>
)

window.document.getElementById('app').replaceWith(app)