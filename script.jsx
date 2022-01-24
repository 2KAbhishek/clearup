const {marked} = marked;

marked.setOptions({
    breaks: true
});

const renderer = new marked.Renderer();

function App() {
    const {useState} = React;
    const [text, setText] = useState('');
    return (
        <div>
            <section className='hero is-info'>
                <div className='hero-body'>
                    <p className='title'>ClearUp</p>
                    <p className='subtitle'>A Markdown Editor</p>
                </div>
            </section>
            <section className='section'>
                <div className='container'>
                    <p className='subtitle has-text-weight-bold px-4'>
                        Markdown
                    </p>
                    <textarea
                        id='editor'
                        className='textarea'
                        placeholder='#Hello World'
                        rows='10'
                        onChange={(e) => setText(e.target.value)}
                        value={text}></textarea>
                </div>
            </section>
            <section className='section'>
                <Preview markdown={text} />
            </section>
            <footer className='footer mt-4'>
                <div className='content has-text-centered'>
                    <p>
                        <strong>ClearUp</strong> by{' '}
                        <a href='https://jgthms.com'>Abhishek Keshri</a>.
                    </p>
                </div>
            </footer>
        </div>
    );
}

function Preview({markdown}) {
    return (
        <div className='container'>
            <p className='subtitle has-text-info has-text-weight-bold px-4'>
                Preview
            </p>
            <div
                className='content'
                dangerouslySetInnerHTML={{__html: marked(markdown, {renderer})}}
            />
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById('app'));
