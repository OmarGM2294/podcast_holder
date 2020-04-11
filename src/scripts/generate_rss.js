fs = require('fs');

const BASE_URL = 'http://tripleagamingpodcast.com/'
const episodes = JSON.parse(fs.readFileSync('./public/episodes/index.json'))

const builder = require('xmlbuilder')

var doc = {}

generateRSS();

function generateRSS() {
  doc.rss = {
    '@xmlns:atom': 'http://www.w3.org/2005/Atom',
    '@xmlns:itunes': 'http://www.itunes.com/dtds/podcast-1.0.dtd',
    '@version': '2.0',
    channel: {
      link: {
        '#text': BASE_URL
      },
      language: {
        '#text': 'es-es'
      },
      copyright: {
        '#text': `&#xA9;${new Date().getFullYear()}`
      },
      webMaster: {
        '#text': 'ogonzalez2212@gmail.com (Omar Gonzalez)'
      },
      managingEditor: {
        '#text': 'ogonzalez2212@gmail.com (Omar Gonzalez)'
      },
      image: {
        url: {
          '#text': `${BASE_URL}logo.jpg`
        },
        title: {
          '#text': 'Triple A Gaming Podcast'
        },
        link: {
          '#text': BASE_URL
        }
      },
      'itunes:owner': {
        'itunes:name': {
          '#text': 'Omar Gonzalez'
        },
        'itunes:email': {
          '#text': 'ogonzalez2212@gmail.com'
        }
      },
      'itunes:category': {
        '@text': 'Leisure',
        'itunes:category': {
          '@text': 'Video Games'
        }
      },
      'itunes:keywords': {
        '#text': 'games, videogames, talking, news'
      },
      'itunes:explicit': {
        '#text': 'no'
      },
      'atom:link': {
        '@href': `${BASE_URL}feed.xml`,
        '@rel': 'self',
        '@type': 'application/rss+xml'
      },
      pubDate: {
        '#text': 'Thu, 09 Apr 2020 21:58:43 GMT'
      },
      title: {
        '#text': 'Triple A Gaming Podcast'
      },
      'itunes:author': {
        '#text': 'Metallium'
      },
      description: {
        '#text': 'La industria de los videojuegos se ha vuelto uno de los negocios más rentables del último siglo, pero como cualquier industria no es perfecta. Metallium habla en este podcast temas relacionados con la industria dando su perspectiva del asunto. Únete a este podcast y escucha como la industria se mueve para que juntos la mejoremos.'
      },
      'itunes:summary': {
        '#text': 'La industria de los videojuegos se ha vuelto uno de los negocios más rentables del último siglo, pero como cualquier industria no es perfecta. Metallium habla en este podcast temas relacionados con la industria dando su perspectiva del asunto. Únete a este podcast y escucha como la industria se mueve para que juntos la mejoremos.'
      },
      'itunes:subtitle': {
        '#text': 'La industria de los videojuegos se ha vuelto uno de los negocios más rentables del último siglo, pero como cualquier industria no es perfecta. Metallium habla en este podcast temas relacionados con la industria dando su perspectiva del asunto.'
      },
      lastBuildDate: {
        '#text': new Date().toGMTString()
      }
    }
  }

  for (let episode of episodes) {
    doc.rss.channel[`item-${episode.id}`] = {
      title: {
        '#text': episode.title
      },
      description: {
        '#text': episode.description
      },
      'itunes:summary': {
        '#text': episode.description
      },
      'itunes:subtitle': {
        '#text': episode.subtitle
      },
      enclosure: {
        '@url': `${BASE_URL}episodes/${episode.file}`,
        '@type': 'audio/mpeg',
        '@length': '1'
      },
      'itunes:image': {
        '@href': `${BASE_URL}episodes/${episode.img}` 
      },
      guid: {
        '#text': episode.id
      },
      'itunes:duration': {
        '#text': episode.duration
      },
      pubDate: {
        '#text': episode.pubDate
      }
    }
  }
}

var xml = builder.create(doc).end({ pretty: true});

fs.writeFile('./public/feed.xml', xml.replace('amp;', '').replace(/item-\w+/g, 'item'), function (err) {
  if (err) return console.log(err);
  console.log('Created');
});