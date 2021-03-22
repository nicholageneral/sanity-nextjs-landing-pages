export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '605814c2369ba22573e3f251',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-n9in26th',
                  apiId: '7fc18c1e-f3eb-4f63-bcc2-d2abcfaa47ca'
                },
                {
                  buildHookId: '605814c264b6ccca624d0907',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-qn8bc7ys',
                  apiId: '8aad72ba-2d41-4ed3-a442-74a677c6b3c2'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/nicholageneral/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-qn8bc7ys.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
