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
            <section className='hero is-info has-text-centered'>
                <div className='hero-body'>
                    <p className='title'>ClearUp</p>
                    <p className='subtitle'>A Markdown Editor</p>
                </div>
            </section>
            <div className='columns is-desktop'>
                <section className='section column'>
                    <div className='container'>
                        <p className='subtitle has-text-weight-bold px-4'>
                            Markdown
                        </p>
                        <div className='box'>
                            <textarea
                                id='editor'
                                className='textarea'
                                placeholder='# Hello World'
                                rows='10'
                                onChange={(e) => setText(e.target.value)}
                                value={text}></textarea>
                        </div>
                    </div>
                </section>
                <section className='section column'>
                    <Preview markdown={text} />
                </section>
            </div>
            <footer className='footer mt-4'>
                <div className='content has-text-centered'>
                    <p>
                        <strong>ClearUp</strong> by{' '}
                        <a href='https://jgthms.com'>2KAbhishek</a>
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
            {markdown.length > 0 && (
                <div className='box'>
                    <div
                        className='content'
                        dangerouslySetInnerHTML={{
                            __html: marked(markdown, {renderer})
                        }}
                    />
                </div>
            )}
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById('app'));
