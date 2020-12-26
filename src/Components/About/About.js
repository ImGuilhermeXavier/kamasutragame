import React from 'react';

import styles from './About.module.scss';

const About = () => {
    return (
        <section className={styles.about}>
            <a href='.' className={styles.title} id='whats-is' name='whats-is'>
                <h1>O que é o Kama Sutra?</h1>
            </a>
            <p className={styles.description}>
                Muito mais do que um guia de posições sexuais, a obra é um
                conjunto de etiquetas para uso dos nobres, foi baseado em
                preceitos sagrados hindus. O Kamasutram (como é conhecido)
                aborda diversos aspectos da vida cotidiana: como encontrar um
                par ideal e se relacionar com outras pessoas, cuidar da casa e
                obter sucesso.
            </p>
            <a
                href='.'
                className={styles.title}
                id='where-from'
                name='where-from'
            >
                <h1>Onde surgiu o Kama Sutra?</h1>
            </a>
            <p className={styles.description}>
                De origem Hindu foi um compilado feito por Mallanaga
                Vatsyasyana, teólogo hindu dos séculos 3 e 4. Ele passou 20 anos
                reunindo 79 textos eróticos da antiguidade, apesar do autor
                afirmar que ja fez todas as 529 posições, historiadores afirmam
                que ele não era casado e morreu preso em um convento.
            </p>
            <a
                href='.'
                className={styles.title}
                id='how-to-play'
                name='how-to-play'
            >
                <h1>Como jogar o Kama Sutra Game?</h1>
            </a>
            <p className={styles.description}>
                É um jogo para casais com posições sexuais de diferentes níveis
                de dificuldade, ao escolher quantas deseja, voce pode aceitar ou
                pular cada uma, no final poderá conferir em Estatísticas quantas
                posições foram feitas, ou em Posições para conferir detalhes de
                cada uma.
            </p>
            <a
                href='.'
                className={styles.title}
                id='can-we-play'
                name='can-we-play'
            >
                <h1>
                    Somos um casal iniciante e não temos muita prática,
                    conseguimos jogar?
                </h1>
            </a>
            <p className={styles.description}>
                Com certeza! O jogo é feito para todos os casais iniciantes ou
                experientes, se a posição incomodar, pule e escolha a que se
                sentir mais confortável.
            </p>
        </section>
    );
};

export default About;