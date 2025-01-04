import { mount } from 'svelte';
import './app.css';
import Footer from './lib/Footer.svelte';

const footer = document.querySelector('#svelte-footer') as Element;
mount(Footer, { target: footer });
