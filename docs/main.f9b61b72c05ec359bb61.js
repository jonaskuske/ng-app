;(window.webpackJsonp = window.webpackJsonp || []).push([
  [1],
  {
    0: function(n, l, t) {
      n.exports = t('zUnb')
    },
    AytR: function(n, l, t) {
      'use strict'
      t.d(l, 'a', function() {
        return e
      })
      const e = { production: !0, hmr: !1, apiUrl: 'https://api.dmp-bremerhaven.de/wp-json/wp/v2/' }
    },
    Ss9G: function(n, l, t) {
      'use strict'
      var e = t('8Y7J')
      class o {}
      const u = document.body
      class a {
        constructor() {
          ;(this.mode = u.classList.contains('light') ? 'light' : 'dark'),
            (this.toggleMode = () => {
              this.mode = u.classList.toggle('light') ? 'light' : 'dark'
            })
        }
      }
      var i = t('pMnS'),
        r = t('iInd'),
        d = t('SVse')
      class s {
        constructor() {}
        ngOnInit() {}
      }
      var c = e['\u0275crt']({
        encapsulation: 0,
        styles: [
          [
            '.post-detail__spinner[_ngcontent-%COMP%]{display:inline-block;margin-left:.5em;-webkit-animation:2.5s ease-in-out infinite rotate;animation:2.5s ease-in-out infinite rotate}@-webkit-keyframes rotate{0%{-webkit-transform:rotate(0);transform:rotate(0)}15%,50%{-webkit-transform:rotate(180deg);transform:rotate(180deg)}100%,65%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes rotate{0%{-webkit-transform:rotate(0);transform:rotate(0)}15%,50%{-webkit-transform:rotate(180deg);transform:rotate(180deg)}100%,65%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}\n/*# sourceMappingURL=loading-spinner.component.css.map*/',
          ],
        ],
        data: {},
      })
      function p(n) {
        return e['\u0275vid'](
          0,
          [
            (n()(),
            e['\u0275eld'](
              0,
              0,
              null,
              null,
              1,
              'span',
              [
                ['aria-hidden', 'true'],
                ['class', 'post-detail__spinner'],
                ['role', 'img'],
                ['style', 'font-style: normal;'],
              ],
              null,
              null,
              null,
              null,
              null,
            )),
            (n()(), e['\u0275ted'](-1, null, ['\u23f3'])),
          ],
          null,
          null,
        )
      }
      var g = t('mrSG'),
        m = t('e1JD'),
        f = t('lJxs'),
        _ = t('JIr8'),
        h = t('AytR'),
        v = t('IheW')
      class y {
        constructor(n) {
          this.http = n
        }
        getPosts({ perPage: n = 10, page: l = 1 } = {}) {
          return this.http.get(`${h.a.apiUrl}posts?per_page=${n}&page=${l}`)
        }
        getPost({ id: n }) {
          return this.http.get(`${h.a.apiUrl}posts/${n}`)
        }
      }
      y.ngInjectableDef = e.defineInjectable({
        factory: function() {
          return new y(e.inject(v.HttpClient))
        },
        token: y,
        providedIn: 'root',
      })
      class b {
        constructor(n) {
          this.id = n
        }
      }
      b.type = '[Portfolio] Get Post'
      class C {
        constructor(n = 10) {
          this.count = n
        }
      }
      C.type = '[Portfolio] Get Posts'
      class P {
        constructor(n) {
          this.post = n
        }
      }
      P.type = '[Portfolio API] Get Post Success'
      class I {
        constructor(n) {
          this.posts = n
        }
      }
      I.type = '[Portfolio API] Get Posts Success'
      class O {
        constructor(n) {
          this.error = n
        }
      }
      O.type = '[Portfolio API] Get Post Error'
      class M {
        constructor(n) {
          this.error = n
        }
      }
      M.type = '[Portfolio API] Get Posts Error'
      let T = class {
        constructor(n) {
          this.postsService = n
        }
        static posts(n) {
          return n.posts
        }
        static postsSortedById(n) {
          return [...n.posts].sort((n, l) => l.id - n.id)
        }
        static getPostById({ posts: n }) {
          return l => n.find(n => n.id === l)
        }
        static isFetchingPosts(n) {
          return n.isFetchingPosts
        }
        ngxsOnInit(n) {
          return n.dispatch(new C())
        }
        getPost(n, l) {
          const { posts: t } = n.getState(),
            e = t.find(({ id: n }) => n === l.id)
          return e
            ? n.dispatch(new P(e))
            : this.postsService.getPost({ id: l.id }).pipe(
                Object(f.a)(l => n.dispatch(new P(l))),
                Object(_.a)(l => n.dispatch(new O(l))),
              )
        }
        getPostSuccess(n, l) {
          const { posts: t } = n.getState()
          t.find(n => n.id === l.post.id) || n.patchState({ posts: [...t, l.post] })
        }
        getPostError(n, l) {}
        getPosts(n, l) {
          n.patchState({ isFetchingPosts: !0 })
          const t = n.getState().pageIndex
          return this.postsService.getPosts({ page: t + 1 }).pipe(
            Object(f.a)(l => n.dispatch(new I(l))),
            Object(_.a)(l => n.dispatch(new M(l))),
          )
        }
        getPostsSuccess(n, l) {
          const { posts: t, pageIndex: e } = n.getState(),
            o = l.posts.filter(n => !t.find(l => l.id === n.id))
          n.patchState({ posts: [...t, ...o], isFetchingPosts: !1, pageIndex: e + 1 })
        }
        getPostsError(n, l) {
          console.error(l.error), n.patchState({ isFetchingPosts: !1 })
        }
      }
      g.__decorate(
        [
          Object(m.a)(b),
          g.__metadata('design:type', Function),
          g.__metadata('design:paramtypes', [Object, b]),
          g.__metadata('design:returntype', void 0),
        ],
        T.prototype,
        'getPost',
        null,
      ),
        g.__decorate(
          [
            Object(m.a)(P),
            g.__metadata('design:type', Function),
            g.__metadata('design:paramtypes', [Object, P]),
            g.__metadata('design:returntype', void 0),
          ],
          T.prototype,
          'getPostSuccess',
          null,
        ),
        g.__decorate(
          [
            Object(m.a)(O),
            g.__metadata('design:type', Function),
            g.__metadata('design:paramtypes', [Object, O]),
            g.__metadata('design:returntype', void 0),
          ],
          T.prototype,
          'getPostError',
          null,
        ),
        g.__decorate(
          [
            Object(m.a)(C),
            g.__metadata('design:type', Function),
            g.__metadata('design:paramtypes', [Object, C]),
            g.__metadata('design:returntype', void 0),
          ],
          T.prototype,
          'getPosts',
          null,
        ),
        g.__decorate(
          [
            Object(m.a)(I),
            g.__metadata('design:type', Function),
            g.__metadata('design:paramtypes', [Object, I]),
            g.__metadata('design:returntype', void 0),
          ],
          T.prototype,
          'getPostsSuccess',
          null,
        ),
        g.__decorate(
          [
            Object(m.a)(M),
            g.__metadata('design:type', Function),
            g.__metadata('design:paramtypes', [Object, O]),
            g.__metadata('design:returntype', void 0),
          ],
          T.prototype,
          'getPostsError',
          null,
        ),
        g.__decorate(
          [
            Object(m.g)(),
            g.__metadata('design:type', Function),
            g.__metadata('design:paramtypes', [Object]),
            g.__metadata('design:returntype', void 0),
          ],
          T,
          'posts',
          null,
        ),
        g.__decorate(
          [
            Object(m.g)(),
            g.__metadata('design:type', Function),
            g.__metadata('design:paramtypes', [Object]),
            g.__metadata('design:returntype', void 0),
          ],
          T,
          'postsSortedById',
          null,
        ),
        g.__decorate(
          [
            Object(m.g)(),
            g.__metadata('design:type', Function),
            g.__metadata('design:paramtypes', [Object]),
            g.__metadata('design:returntype', void 0),
          ],
          T,
          'getPostById',
          null,
        ),
        g.__decorate(
          [
            Object(m.g)(),
            g.__metadata('design:type', Function),
            g.__metadata('design:paramtypes', [Object]),
            g.__metadata('design:returntype', void 0),
          ],
          T,
          'isFetchingPosts',
          null,
        ),
        (T = g.__decorate(
          [
            Object(m.h)({
              name: 'portfolio',
              defaults: { posts: [], isFetchingPosts: !1, pageIndex: 0 },
            }),
          ],
          T,
        ))
      var w = t('HDdC')
      const R = /<br\s?\/?>(<\/br>)?/g
      class S {
        constructor(n) {
          this.store = n
        }
        loadNextPage() {
          this.store.dispatch(new C())
        }
        getTeaser(n) {
          return n.length < 150 ? n : `${n.slice(0, 145).replace(R, '')}...`
        }
      }
      g.__decorate(
        [Object(m.f)(T.isFetchingPosts), g.__metadata('design:type', w.a)],
        S.prototype,
        'isLoading$',
        void 0,
      ),
        g.__decorate(
          [Object(m.f)(T.postsSortedById), g.__metadata('design:type', w.a)],
          S.prototype,
          'posts$',
          void 0,
        )
      var k = e['\u0275crt']({
        encapsulation: 0,
        styles: [
          [
            'section[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{display:inline}a[_ngcontent-%COMP%]{margin-left:1em}.post-master__status-msg[_ngcontent-%COMP%]{text-align:center;font-style:italic;font-weight:bolder}.post-master__footer[_ngcontent-%COMP%]{text-align:center;margin-top:2rem}\n/*# sourceMappingURL=post-master.component.css.map*/',
          ],
        ],
        data: {},
      })
      function E(n) {
        return e['\u0275vid'](
          0,
          [
            (n()(),
            e['\u0275eld'](0, 0, null, null, 6, 'section', [], null, null, null, null, null)),
            (n()(),
            e['\u0275eld'](
              1,
              0,
              null,
              null,
              0,
              'h3',
              [],
              [[8, 'innerHTML', 1]],
              null,
              null,
              null,
              null,
            )),
            (n()(),
            e['\u0275eld'](
              2,
              0,
              null,
              null,
              0,
              'p',
              [],
              [[8, 'innerHTML', 1]],
              null,
              null,
              null,
              null,
            )),
            (n()(),
            e['\u0275eld'](
              3,
              0,
              null,
              null,
              2,
              'a',
              [],
              [[1, 'target', 0], [8, 'href', 4]],
              [[null, 'click']],
              function(n, l, t) {
                var o = !0
                return (
                  'click' === l &&
                    (o =
                      !1 !==
                        e['\u0275nov'](n, 4).onClick(t.button, t.ctrlKey, t.metaKey, t.shiftKey) &&
                      o),
                  o
                )
              },
              null,
              null,
            )),
            e['\u0275did'](
              4,
              671744,
              null,
              0,
              r.o,
              [r.n, r.a, d.LocationStrategy],
              { routerLink: [0, 'routerLink'] },
              null,
            ),
            (n()(), e['\u0275ted'](-1, null, ['Projekt ansehen \u2192'])),
            (n()(), e['\u0275eld'](6, 0, null, null, 0, 'hr', [], null, null, null, null, null)),
          ],
          function(n, l) {
            n(l, 4, 0, e['\u0275inlineInterpolate'](1, '', l.context.$implicit.id, ''))
          },
          function(n, l) {
            var t = l.component
            n(l, 1, 0, l.context.$implicit.title.rendered),
              n(l, 2, 0, t.getTeaser(l.context.$implicit.acf.beschreibung)),
              n(l, 3, 0, e['\u0275nov'](l, 4).target, e['\u0275nov'](l, 4).href)
          },
        )
      }
      function L(n) {
        return e['\u0275vid'](
          0,
          [
            (n()(),
            e['\u0275eld'](
              0,
              0,
              null,
              null,
              1,
              'button',
              [['type', 'button']],
              null,
              [[null, 'click']],
              function(n, l, t) {
                var e = !0
                return 'click' === l && (e = !1 !== n.component.loadNextPage() && e), e
              },
              null,
              null,
            )),
            (n()(), e['\u0275ted'](-1, null, [' Mehr laden... '])),
          ],
          null,
          null,
        )
      }
      function j(n) {
        return e['\u0275vid'](
          0,
          [
            (n()(), e['\u0275eld'](0, 0, null, null, 7, null, null, null, null, null, null, null)),
            (n()(), e['\u0275and'](16777216, null, null, 2, null, E)),
            e['\u0275did'](
              2,
              278528,
              null,
              0,
              d.NgForOf,
              [e.ViewContainerRef, e.TemplateRef, e.IterableDiffers],
              { ngForOf: [0, 'ngForOf'] },
              null,
            ),
            e['\u0275pid'](131072, d.AsyncPipe, [e.ChangeDetectorRef]),
            (n()(),
            e['\u0275eld'](
              4,
              0,
              null,
              null,
              3,
              'footer',
              [['class', 'post-master__footer']],
              null,
              null,
              null,
              null,
              null,
            )),
            (n()(), e['\u0275and'](16777216, null, null, 2, null, L)),
            e['\u0275did'](
              6,
              16384,
              null,
              0,
              d.NgIf,
              [e.ViewContainerRef, e.TemplateRef],
              { ngIf: [0, 'ngIf'] },
              null,
            ),
            e['\u0275pid'](131072, d.AsyncPipe, [e.ChangeDetectorRef]),
          ],
          function(n, l) {
            var t = l.component
            n(l, 2, 0, e['\u0275unv'](l, 2, 0, e['\u0275nov'](l, 3).transform(t.posts$))),
              n(l, 6, 0, !e['\u0275unv'](l, 6, 0, e['\u0275nov'](l, 7).transform(t.isLoading$)))
          },
          null,
        )
      }
      function F(n) {
        return e['\u0275vid'](
          0,
          [
            (n()(),
            e['\u0275eld'](
              0,
              0,
              null,
              null,
              3,
              'p',
              [['class', 'post-master__status-msg']],
              null,
              null,
              null,
              null,
              null,
            )),
            (n()(), e['\u0275ted'](-1, null, [' Keine Projekte vorhanden. '])),
            (n()(),
            e['\u0275eld'](
              2,
              0,
              null,
              null,
              1,
              'span',
              [['aria-hidden', 'true'], ['style', 'font-style: normal']],
              null,
              null,
              null,
              null,
              null,
            )),
            (n()(), e['\u0275ted'](-1, null, ['\u{1f6ab}'])),
          ],
          null,
          null,
        )
      }
      function D(n) {
        return e['\u0275vid'](
          0,
          [
            (n()(), e['\u0275and'](16777216, null, null, 2, null, F)),
            e['\u0275did'](
              1,
              16384,
              null,
              0,
              d.NgIf,
              [e.ViewContainerRef, e.TemplateRef],
              { ngIf: [0, 'ngIf'] },
              null,
            ),
            e['\u0275pid'](131072, d.AsyncPipe, [e.ChangeDetectorRef]),
            (n()(), e['\u0275and'](0, null, null, 0)),
          ],
          function(n, l) {
            var t = l.component
            n(l, 1, 0, !e['\u0275unv'](l, 1, 0, e['\u0275nov'](l, 2).transform(t.isLoading$)))
          },
          null,
        )
      }
      function A(n) {
        return e['\u0275vid'](
          0,
          [
            (n()(),
            e['\u0275eld'](
              0,
              0,
              null,
              null,
              3,
              'p',
              [['class', 'post-master__status-msg']],
              null,
              null,
              null,
              null,
              null,
            )),
            (n()(), e['\u0275ted'](-1, null, [' Projekte werden geladen... '])),
            (n()(),
            e['\u0275eld'](2, 0, null, null, 1, 'app-loading-spinner', [], null, null, null, p, c)),
            e['\u0275did'](3, 114688, null, 0, s, [], null, null),
          ],
          function(n, l) {
            n(l, 3, 0)
          },
          null,
        )
      }
      function N(n) {
        return e['\u0275vid'](
          0,
          [
            (n()(), e['\u0275eld'](0, 0, null, null, 1, 'h2', [], null, null, null, null, null)),
            (n()(), e['\u0275ted'](-1, null, ['DMP Portfolio'])),
            (n()(), e['\u0275and'](16777216, null, null, 2, null, j)),
            e['\u0275did'](
              3,
              16384,
              null,
              0,
              d.NgIf,
              [e.ViewContainerRef, e.TemplateRef],
              { ngIf: [0, 'ngIf'], ngIfElse: [1, 'ngIfElse'] },
              null,
            ),
            e['\u0275pid'](131072, d.AsyncPipe, [e.ChangeDetectorRef]),
            (n()(), e['\u0275and'](0, [['noPosts', 2]], null, 0, null, D)),
            (n()(), e['\u0275and'](16777216, null, null, 2, null, A)),
            e['\u0275did'](
              7,
              16384,
              null,
              0,
              d.NgIf,
              [e.ViewContainerRef, e.TemplateRef],
              { ngIf: [0, 'ngIf'] },
              null,
            ),
            e['\u0275pid'](131072, d.AsyncPipe, [e.ChangeDetectorRef]),
          ],
          function(n, l) {
            var t = l.component
            n(
              l,
              3,
              0,
              e['\u0275unv'](l, 3, 0, e['\u0275nov'](l, 4).transform(t.posts$)).length,
              e['\u0275nov'](l, 5),
            ),
              n(l, 7, 0, e['\u0275unv'](l, 7, 0, e['\u0275nov'](l, 8).transform(t.isLoading$)))
          },
          null,
        )
      }
      function x(n) {
        return e['\u0275vid'](
          0,
          [
            (n()(),
            e['\u0275eld'](0, 0, null, null, 1, 'app-post-master', [], null, null, null, N, k)),
            e['\u0275did'](1, 49152, null, 0, S, [m.j], null, null),
          ],
          null,
          null,
        )
      }
      var H = e['\u0275ccf']('app-post-master', S, x, {}, {}, [])
      class U {
        constructor(n) {
          this.embedService = n
        }
        ngOnInit() {
          'video' === this.type && (this.iframeHTML = this.embedService.embed(this.video))
        }
      }
      var B = t('Kg6l'),
        V = e['\u0275crt']({
          encapsulation: 0,
          styles: [
            [
              '.showcase__iframe-container[_ngcontent-%COMP%]{position:relative;width:100%;padding-top:56.25%;height:0;background:url(video.2e6558147ccb0c5752db.png) center/20% no-repeat,#000}.showcase__iframe-container[_ngcontent-%COMP%] iframe{position:absolute;top:0;left:0;width:100%;height:100%}\n/*# sourceMappingURL=showcase.component.css.map*/',
            ],
          ],
          data: {},
        })
      function $(n) {
        return e['\u0275vid'](
          0,
          [
            (n()(),
            e['\u0275eld'](
              0,
              0,
              null,
              null,
              0,
              'img',
              [],
              [[8, 'src', 4], [8, 'alt', 0]],
              null,
              null,
              null,
              null,
            )),
          ],
          null,
          function(n, l) {
            var t = l.component
            n(l, 0, 0, t.image.sizes.large, t.image.title || '')
          },
        )
      }
      function G(n) {
        return e['\u0275vid'](
          0,
          [
            (n()(),
            e['\u0275eld'](
              0,
              0,
              null,
              null,
              0,
              'div',
              [['class', 'showcase__iframe-container']],
              [[8, 'innerHTML', 1]],
              null,
              null,
              null,
              null,
            )),
          ],
          null,
          function(n, l) {
            n(l, 0, 0, l.component.iframeHTML)
          },
        )
      }
      function z(n) {
        return e['\u0275vid'](
          0,
          [
            (n()(), e['\u0275eld'](0, 0, null, null, 5, null, null, null, null, null, null, null)),
            e['\u0275did'](1, 16384, null, 0, d.NgSwitch, [], { ngSwitch: [0, 'ngSwitch'] }, null),
            (n()(), e['\u0275and'](16777216, null, null, 1, null, $)),
            e['\u0275did'](
              3,
              278528,
              null,
              0,
              d.NgSwitchCase,
              [e.ViewContainerRef, e.TemplateRef, d.NgSwitch],
              { ngSwitchCase: [0, 'ngSwitchCase'] },
              null,
            ),
            (n()(), e['\u0275and'](16777216, null, null, 1, null, G)),
            e['\u0275did'](
              5,
              278528,
              null,
              0,
              d.NgSwitchCase,
              [e.ViewContainerRef, e.TemplateRef, d.NgSwitch],
              { ngSwitchCase: [0, 'ngSwitchCase'] },
              null,
            ),
          ],
          function(n, l) {
            n(l, 1, 0, l.component.type), n(l, 3, 0, 'image'), n(l, 5, 0, 'video')
          },
          null,
        )
      }
      class K {
        constructor(n, l) {
          ;(this.route = n), (this.store = l), (this.finishedLoading = !1)
          const t = +this.route.snapshot.paramMap.get('id')
          this.store.dispatch(new b(t)).subscribe(() => (this.finishedLoading = !0)),
            (this.post$ = this.store.select(T.getPostById).pipe(Object(f.a)(n => n(t))))
        }
        toTop() {
          document.body.scrollIntoView({ block: 'start', behavior: 'smooth' })
        }
      }
      var q = e['\u0275crt']({
        encapsulation: 0,
        styles: [
          [
            '.post-detail__footer[_ngcontent-%COMP%]{margin-top:1rem;text-align:center}.post-detail__status-msg[_ngcontent-%COMP%]{text-align:center;font-style:italic;font-weight:bolder}\n/*# sourceMappingURL=post-detail.component.css.map*/',
          ],
        ],
        data: {},
      })
      function J(n) {
        return e['\u0275vid'](
          0,
          [
            (n()(), e['\u0275eld'](0, 0, null, null, 1, 'h3', [], null, null, null, null, null)),
            (n()(), e['\u0275ted'](-1, null, ['Galerie'])),
          ],
          null,
          null,
        )
      }
      function X(n) {
        return e['\u0275vid'](
          0,
          [
            (n()(),
            e['\u0275eld'](
              0,
              0,
              null,
              null,
              0,
              'img',
              [['alt', '']],
              [[8, 'src', 4]],
              null,
              null,
              null,
              null,
            )),
          ],
          null,
          function(n, l) {
            n(l, 0, 0, l.context.$implicit.sizes.medium)
          },
        )
      }
      function Z(n) {
        return e['\u0275vid'](
          0,
          [
            (n()(),
            e['\u0275eld'](0, 0, null, null, 11, 'section', [], null, null, null, null, null)),
            (n()(),
            e['\u0275eld'](
              1,
              0,
              null,
              null,
              0,
              'h2',
              [],
              [[8, 'innerHTML', 1]],
              null,
              null,
              null,
              null,
            )),
            (n()(),
            e['\u0275eld'](2, 0, null, null, 1, 'app-showcase', [], null, null, null, z, V)),
            e['\u0275did'](
              3,
              114688,
              null,
              0,
              U,
              [B.EmbedVideoService],
              { type: [0, 'type'], image: [1, 'image'], video: [2, 'video'] },
              null,
            ),
            (n()(),
            e['\u0275eld'](
              4,
              0,
              null,
              null,
              0,
              'p',
              [],
              [[8, 'innerHTML', 1]],
              null,
              null,
              null,
              null,
            )),
            (n()(), e['\u0275and'](16777216, null, null, 1, null, J)),
            e['\u0275did'](
              6,
              16384,
              null,
              0,
              d.NgIf,
              [e.ViewContainerRef, e.TemplateRef],
              { ngIf: [0, 'ngIf'] },
              null,
            ),
            (n()(), e['\u0275and'](16777216, null, null, 1, null, X)),
            e['\u0275did'](
              8,
              278528,
              null,
              0,
              d.NgForOf,
              [e.ViewContainerRef, e.TemplateRef, e.IterableDiffers],
              { ngForOf: [0, 'ngForOf'] },
              null,
            ),
            (n()(),
            e['\u0275eld'](
              9,
              0,
              null,
              null,
              2,
              'footer',
              [['class', 'post-detail__footer']],
              null,
              null,
              null,
              null,
              null,
            )),
            (n()(),
            e['\u0275eld'](
              10,
              0,
              null,
              null,
              1,
              'button',
              [['type', 'button']],
              null,
              [[null, 'click']],
              function(n, l, t) {
                var e = !0
                return 'click' === l && (e = !1 !== n.component.toTop() && e), e
              },
              null,
              null,
            )),
            (n()(), e['\u0275ted'](-1, null, ['Nach oben'])),
          ],
          function(n, l) {
            n(
              l,
              3,
              0,
              l.context.ngIf.acf.showcaseFormat,
              l.context.ngIf.acf.showcase,
              l.context.ngIf.acf.youtube,
            ),
              n(l, 6, 0, l.context.ngIf.acf.galerie.length),
              n(l, 8, 0, l.context.ngIf.acf.galerie)
          },
          function(n, l) {
            n(l, 1, 0, l.context.ngIf.title.rendered), n(l, 4, 0, l.context.ngIf.acf.beschreibung)
          },
        )
      }
      function W(n) {
        return e['\u0275vid'](
          0,
          [
            (n()(), e['\u0275eld'](0, 0, null, null, 3, null, null, null, null, null, null, null)),
            (n()(), e['\u0275and'](16777216, null, null, 2, null, Z)),
            e['\u0275did'](
              2,
              16384,
              null,
              0,
              d.NgIf,
              [e.ViewContainerRef, e.TemplateRef],
              { ngIf: [0, 'ngIf'], ngIfElse: [1, 'ngIfElse'] },
              null,
            ),
            e['\u0275pid'](131072, d.AsyncPipe, [e.ChangeDetectorRef]),
            (n()(), e['\u0275and'](0, null, null, 0)),
          ],
          function(n, l) {
            var t = l.component
            n(
              l,
              2,
              0,
              e['\u0275unv'](l, 2, 0, e['\u0275nov'](l, 3).transform(t.post$)),
              e['\u0275nov'](l.parent, 2),
            )
          },
          null,
        )
      }
      function Y(n) {
        return e['\u0275vid'](
          0,
          [
            (n()(),
            e['\u0275eld'](
              0,
              0,
              null,
              null,
              3,
              'p',
              [['class', 'post-detail__status-msg']],
              null,
              null,
              null,
              null,
              null,
            )),
            (n()(), e['\u0275ted'](-1, null, [' Nicht gefunden. '])),
            (n()(),
            e['\u0275eld'](
              2,
              0,
              null,
              null,
              1,
              'span',
              [['aria-label', 'Sad cat'], ['role', 'img'], ['style', 'font-style: normal;']],
              null,
              null,
              null,
              null,
              null,
            )),
            (n()(), e['\u0275ted'](-1, null, ['\u{1f63f}'])),
          ],
          null,
          null,
        )
      }
      function Q(n) {
        return e['\u0275vid'](
          0,
          [
            (n()(),
            e['\u0275eld'](
              0,
              0,
              null,
              null,
              3,
              'p',
              [['class', 'post-detail__status-msg']],
              null,
              null,
              null,
              null,
              null,
            )),
            (n()(), e['\u0275ted'](-1, null, ['Wird geladen... '])),
            (n()(),
            e['\u0275eld'](2, 0, null, null, 1, 'app-loading-spinner', [], null, null, null, p, c)),
            e['\u0275did'](3, 114688, null, 0, s, [], null, null),
          ],
          function(n, l) {
            n(l, 3, 0)
          },
          null,
        )
      }
      function nn(n) {
        return e['\u0275vid'](
          0,
          [
            (n()(), e['\u0275and'](16777216, null, null, 1, null, W)),
            e['\u0275did'](
              1,
              16384,
              null,
              0,
              d.NgIf,
              [e.ViewContainerRef, e.TemplateRef],
              { ngIf: [0, 'ngIf'], ngIfElse: [1, 'ngIfElse'] },
              null,
            ),
            (n()(), e['\u0275and'](0, [['notFound', 2]], null, 0, null, Y)),
            (n()(), e['\u0275and'](0, [['loadingSpinner', 2]], null, 0, null, Q)),
          ],
          function(n, l) {
            n(l, 1, 0, l.component.finishedLoading, e['\u0275nov'](l, 3))
          },
          null,
        )
      }
      function ln(n) {
        return e['\u0275vid'](
          0,
          [
            (n()(),
            e['\u0275eld'](0, 0, null, null, 1, 'app-post-detail', [], null, null, null, nn, q)),
            e['\u0275did'](1, 49152, null, 0, K, [r.a, m.j], null, null),
          ],
          null,
          null,
        )
      }
      var tn = e['\u0275ccf']('app-post-detail', K, ln, {}, {}, [])
      class en {
        constructor(n) {
          this.todo = n
        }
      }
      en.type = '[Todo] Add Todo'
      class on {
        constructor(n) {
          this.index = n
        }
      }
      on.type = '[Todo] Remove Todo'
      class un {
        constructor(n, l) {
          ;(this.index = n), (this.todo = l)
        }
      }
      un.type = '[Todo] Update Todo'
      class an {
        constructor(n) {
          this.store = n
        }
        setCompleteStatus(n, l = !0) {
          this.store.dispatch(new un(n, { isCompleted: l }))
        }
        deleteTodo(n) {
          this.store.dispatch(new on(n))
        }
      }
      var rn = e['\u0275crt']({
        encapsulation: 0,
        styles: [
          [
            'article[_ngcontent-%COMP%]{border-left:2px solid;padding-left:1rem}\n/*# sourceMappingURL=todo-entry.component.css.map*/',
          ],
        ],
        data: {},
      })
      function dn(n) {
        return e['\u0275vid'](
          0,
          [
            (n()(),
            e['\u0275eld'](
              0,
              0,
              null,
              null,
              0,
              'p',
              [],
              [[8, 'innerHTML', 1]],
              null,
              null,
              null,
              null,
            )),
          ],
          null,
          function(n, l) {
            n(l, 0, 0, l.component.todo.body)
          },
        )
      }
      function sn(n) {
        return e['\u0275vid'](
          0,
          [
            (n()(),
            e['\u0275eld'](0, 0, null, null, 8, 'article', [], null, null, null, null, null)),
            (n()(), e['\u0275eld'](1, 0, null, null, 1, 'h5', [], null, null, null, null, null)),
            (n()(), e['\u0275ted'](2, null, ['', ' \u2013 ', ' erledigt'])),
            (n()(), e['\u0275and'](16777216, null, null, 1, null, dn)),
            e['\u0275did'](
              4,
              16384,
              null,
              0,
              d.NgIf,
              [e.ViewContainerRef, e.TemplateRef],
              { ngIf: [0, 'ngIf'] },
              null,
            ),
            (n()(),
            e['\u0275eld'](
              5,
              0,
              null,
              null,
              1,
              'button',
              [['type', 'button']],
              null,
              [[null, 'click']],
              function(n, l, t) {
                var e = !0,
                  o = n.component
                return (
                  'click' === l &&
                    (e = !1 !== o.setCompleteStatus(o.todo.index, !o.todo.isCompleted) && e),
                  e
                )
              },
              null,
              null,
            )),
            (n()(), e['\u0275ted'](6, null, [' ', ' '])),
            (n()(),
            e['\u0275eld'](
              7,
              0,
              null,
              null,
              1,
              'button',
              [['type', 'button']],
              null,
              [[null, 'click']],
              function(n, l, t) {
                var e = !0,
                  o = n.component
                return 'click' === l && (e = !1 !== o.deleteTodo(o.todo.index) && e), e
              },
              null,
              null,
            )),
            (n()(), e['\u0275ted'](-1, null, ['\u{1f5d1}\ufe0f L\xf6schen'])),
          ],
          function(n, l) {
            n(l, 4, 0, !l.component.todo.isCompleted)
          },
          function(n, l) {
            var t = l.component
            n(l, 2, 0, t.todo.title, t.todo.isCompleted ? '\u2714' : 'noch nicht'),
              n(l, 6, 0, t.todo.isCompleted ? '\u274e Ausstehend' : '\u2705 Erledigt')
          },
        )
      }
      var cn = t('s7LF')
      class pn {
        constructor(n, l, t = !1) {
          ;(this.title = n), (this.body = l), (this.isCompleted = t)
        }
      }
      class gn {
        constructor(n) {
          ;(this.store = n), (this.todoTitle = ''), (this.todoBody = '')
        }
        onSubmit() {
          const n = this.todoBody.replace(/\n/g, '<br>')
          this.store.dispatch(new en(new pn(this.todoTitle, n)))
        }
      }
      var mn,
        fn = e['\u0275crt']({
          encapsulation: 0,
          styles: [
            [
              'input[_ngcontent-%COMP%]{width:100%;max-width:400px;box-sizing:border-box}textarea[_ngcontent-%COMP%]{max-width:400px}button[_ngcontent-%COMP%]{margin-top:1rem}button[_ngcontent-%COMP%]:disabled{pointer-events:none;cursor:pointer;opacity:.7}input.ng-touched.ng-invalid[_ngcontent-%COMP%], textarea.ng-touched.ng-invalid[_ngcontent-%COMP%]{outline:#850000 solid 1px}\n/*# sourceMappingURL=form-add-todo.component.css.map*/',
            ],
          ],
          data: {},
        })
      function _n(n) {
        return e['\u0275vid'](
          0,
          [
            (n()(),
            e['\u0275eld'](
              0,
              0,
              null,
              null,
              29,
              'form',
              [['action', './'], ['autocomplete', 'off'], ['method', 'POST'], ['novalidate', '']],
              [
                [2, 'ng-untouched', null],
                [2, 'ng-touched', null],
                [2, 'ng-pristine', null],
                [2, 'ng-dirty', null],
                [2, 'ng-valid', null],
                [2, 'ng-invalid', null],
                [2, 'ng-pending', null],
              ],
              [[null, 'ngSubmit'], [null, 'submit'], [null, 'reset']],
              function(n, l, t) {
                var o = !0,
                  u = n.component
                return (
                  'submit' === l && (o = !1 !== e['\u0275nov'](n, 2).onSubmit(t) && o),
                  'reset' === l && (o = !1 !== e['\u0275nov'](n, 2).onReset() && o),
                  'ngSubmit' === l &&
                    (u.onSubmit(), (o = !1 !== e['\u0275nov'](n, 2).reset() && o)),
                  o
                )
              },
              null,
              null,
            )),
            e['\u0275did'](1, 16384, null, 0, cn.n, [], null, null),
            e['\u0275did'](2, 4210688, [['todoForm', 4]], 0, cn.j, [[8, null], [8, null]], null, {
              ngSubmit: 'ngSubmit',
            }),
            e['\u0275prd'](2048, null, cn.b, null, [cn.j]),
            e['\u0275did'](4, 16384, null, 0, cn.i, [[4, cn.b]], null, null),
            (n()(),
            e['\u0275eld'](
              5,
              0,
              null,
              null,
              1,
              'label',
              [['for', 'todoTitle']],
              null,
              null,
              null,
              null,
              null,
            )),
            (n()(), e['\u0275ted'](-1, null, ['Titel:'])),
            (n()(), e['\u0275eld'](7, 0, null, null, 0, 'br', [], null, null, null, null, null)),
            (n()(),
            e['\u0275eld'](
              8,
              0,
              null,
              null,
              7,
              'input',
              [
                ['id', 'todoTitle'],
                ['name', 'todoTitle'],
                ['placeholder', 'Einkauf bei Lidl'],
                ['required', ''],
                ['type', 'text'],
              ],
              [
                [1, 'required', 0],
                [2, 'ng-untouched', null],
                [2, 'ng-touched', null],
                [2, 'ng-pristine', null],
                [2, 'ng-dirty', null],
                [2, 'ng-valid', null],
                [2, 'ng-invalid', null],
                [2, 'ng-pending', null],
              ],
              [
                [null, 'ngModelChange'],
                [null, 'input'],
                [null, 'blur'],
                [null, 'compositionstart'],
                [null, 'compositionend'],
              ],
              function(n, l, t) {
                var o = !0,
                  u = n.component
                return (
                  'input' === l &&
                    (o = !1 !== e['\u0275nov'](n, 9)._handleInput(t.target.value) && o),
                  'blur' === l && (o = !1 !== e['\u0275nov'](n, 9).onTouched() && o),
                  'compositionstart' === l &&
                    (o = !1 !== e['\u0275nov'](n, 9)._compositionStart() && o),
                  'compositionend' === l &&
                    (o = !1 !== e['\u0275nov'](n, 9)._compositionEnd(t.target.value) && o),
                  'ngModelChange' === l && (o = !1 !== (u.todoTitle = t) && o),
                  o
                )
              },
              null,
              null,
            )),
            e['\u0275did'](
              9,
              16384,
              null,
              0,
              cn.c,
              [e.Renderer2, e.ElementRef, [2, cn.a]],
              null,
              null,
            ),
            e['\u0275did'](10, 16384, null, 0, cn.l, [], { required: [0, 'required'] }, null),
            e['\u0275prd'](
              1024,
              null,
              cn.e,
              function(n) {
                return [n]
              },
              [cn.l],
            ),
            e['\u0275prd'](
              1024,
              null,
              cn.f,
              function(n) {
                return [n]
              },
              [cn.c],
            ),
            e['\u0275did'](
              13,
              671744,
              null,
              0,
              cn.k,
              [[2, cn.b], [6, cn.e], [8, null], [6, cn.f]],
              { name: [0, 'name'], model: [1, 'model'] },
              { update: 'ngModelChange' },
            ),
            e['\u0275prd'](2048, null, cn.g, null, [cn.k]),
            e['\u0275did'](15, 16384, null, 0, cn.h, [[4, cn.g]], null, null),
            (n()(),
            e['\u0275eld'](
              16,
              0,
              null,
              null,
              1,
              'label',
              [['for', 'todoBody']],
              null,
              null,
              null,
              null,
              null,
            )),
            (n()(), e['\u0275ted'](-1, null, ['Inhalt:'])),
            (n()(), e['\u0275eld'](18, 0, null, null, 0, 'br', [], null, null, null, null, null)),
            (n()(),
            e['\u0275eld'](
              19,
              0,
              null,
              null,
              7,
              'textarea',
              [
                ['name', 'todoBody'],
                ['placeholder', '\u2022 2 Packungen TK-Spinat...'],
                ['required', ''],
                ['rows', '4'],
              ],
              [
                [1, 'required', 0],
                [2, 'ng-untouched', null],
                [2, 'ng-touched', null],
                [2, 'ng-pristine', null],
                [2, 'ng-dirty', null],
                [2, 'ng-valid', null],
                [2, 'ng-invalid', null],
                [2, 'ng-pending', null],
              ],
              [
                [null, 'ngModelChange'],
                [null, 'input'],
                [null, 'blur'],
                [null, 'compositionstart'],
                [null, 'compositionend'],
              ],
              function(n, l, t) {
                var o = !0,
                  u = n.component
                return (
                  'input' === l &&
                    (o = !1 !== e['\u0275nov'](n, 20)._handleInput(t.target.value) && o),
                  'blur' === l && (o = !1 !== e['\u0275nov'](n, 20).onTouched() && o),
                  'compositionstart' === l &&
                    (o = !1 !== e['\u0275nov'](n, 20)._compositionStart() && o),
                  'compositionend' === l &&
                    (o = !1 !== e['\u0275nov'](n, 20)._compositionEnd(t.target.value) && o),
                  'ngModelChange' === l && (o = !1 !== (u.todoBody = t) && o),
                  o
                )
              },
              null,
              null,
            )),
            e['\u0275did'](
              20,
              16384,
              null,
              0,
              cn.c,
              [e.Renderer2, e.ElementRef, [2, cn.a]],
              null,
              null,
            ),
            e['\u0275did'](21, 16384, null, 0, cn.l, [], { required: [0, 'required'] }, null),
            e['\u0275prd'](
              1024,
              null,
              cn.e,
              function(n) {
                return [n]
              },
              [cn.l],
            ),
            e['\u0275prd'](
              1024,
              null,
              cn.f,
              function(n) {
                return [n]
              },
              [cn.c],
            ),
            e['\u0275did'](
              24,
              671744,
              null,
              0,
              cn.k,
              [[2, cn.b], [6, cn.e], [8, null], [6, cn.f]],
              { name: [0, 'name'], model: [1, 'model'] },
              { update: 'ngModelChange' },
            ),
            e['\u0275prd'](2048, null, cn.g, null, [cn.k]),
            e['\u0275did'](26, 16384, null, 0, cn.h, [[4, cn.g]], null, null),
            (n()(), e['\u0275eld'](27, 0, null, null, 0, 'br', [], null, null, null, null, null)),
            (n()(),
            e['\u0275eld'](
              28,
              0,
              null,
              null,
              1,
              'button',
              [['type', 'submit']],
              [[8, 'disabled', 0]],
              null,
              null,
              null,
              null,
            )),
            (n()(), e['\u0275ted'](-1, null, ['Hinzuf\xfcgen'])),
          ],
          function(n, l) {
            var t = l.component
            n(l, 10, 0, ''),
              n(l, 13, 0, 'todoTitle', t.todoTitle),
              n(l, 21, 0, ''),
              n(l, 24, 0, 'todoBody', t.todoBody)
          },
          function(n, l) {
            n(
              l,
              0,
              0,
              e['\u0275nov'](l, 4).ngClassUntouched,
              e['\u0275nov'](l, 4).ngClassTouched,
              e['\u0275nov'](l, 4).ngClassPristine,
              e['\u0275nov'](l, 4).ngClassDirty,
              e['\u0275nov'](l, 4).ngClassValid,
              e['\u0275nov'](l, 4).ngClassInvalid,
              e['\u0275nov'](l, 4).ngClassPending,
            ),
              n(
                l,
                8,
                0,
                e['\u0275nov'](l, 10).required ? '' : null,
                e['\u0275nov'](l, 15).ngClassUntouched,
                e['\u0275nov'](l, 15).ngClassTouched,
                e['\u0275nov'](l, 15).ngClassPristine,
                e['\u0275nov'](l, 15).ngClassDirty,
                e['\u0275nov'](l, 15).ngClassValid,
                e['\u0275nov'](l, 15).ngClassInvalid,
                e['\u0275nov'](l, 15).ngClassPending,
              ),
              n(
                l,
                19,
                0,
                e['\u0275nov'](l, 21).required ? '' : null,
                e['\u0275nov'](l, 26).ngClassUntouched,
                e['\u0275nov'](l, 26).ngClassTouched,
                e['\u0275nov'](l, 26).ngClassPristine,
                e['\u0275nov'](l, 26).ngClassDirty,
                e['\u0275nov'](l, 26).ngClassValid,
                e['\u0275nov'](l, 26).ngClassInvalid,
                e['\u0275nov'](l, 26).ngClassPending,
              ),
              n(l, 28, 0, !e['\u0275nov'](l, 2).form.valid)
          },
        )
      }
      const hn = (n, l) => Object.assign({}, n, { index: l }),
        vn = new pn(
          'Weitere Optionen f\xfcr die Demo-App',
          'Features und Methoden, in die man sich anhand der Testanwendung noch einarbeiten kann.<br><br>- Kontrollierte Paginierung f\xfcr Posts<br>- Reactive Forms<br>- Testing<br>- PWA Implementierung<br>- Lazy Loading von Feature Modules',
        )
      let yn = (mn = class {
        static getAll(n) {
          return n.map(hn)
        }
        static getByCompletedState(n) {
          return Object(m.m)([mn], l => l.map(hn).filter(l => l.isCompleted === n))
        }
        addTodo(n, l) {
          n.setState(n => [...n, l.todo])
        }
        removeTodo(n, l) {
          n.setState(n => n.filter((n, t) => t !== l.index))
        }
        updateTodo(n, l) {
          n.setState(n => n.map((n, t) => (t === l.index ? Object.assign({}, n, l.todo) : n)))
        }
      })
      g.__decorate(
        [
          Object(m.a)(en),
          g.__metadata('design:type', Function),
          g.__metadata('design:paramtypes', [Object, en]),
          g.__metadata('design:returntype', void 0),
        ],
        yn.prototype,
        'addTodo',
        null,
      ),
        g.__decorate(
          [
            Object(m.a)(on),
            g.__metadata('design:type', Function),
            g.__metadata('design:paramtypes', [Object, on]),
            g.__metadata('design:returntype', void 0),
          ],
          yn.prototype,
          'removeTodo',
          null,
        ),
        g.__decorate(
          [
            Object(m.a)(un),
            g.__metadata('design:type', Function),
            g.__metadata('design:paramtypes', [Object, un]),
            g.__metadata('design:returntype', void 0),
          ],
          yn.prototype,
          'updateTodo',
          null,
        ),
        g.__decorate(
          [
            Object(m.g)(),
            g.__metadata('design:type', Function),
            g.__metadata('design:paramtypes', [Array]),
            g.__metadata('design:returntype', void 0),
          ],
          yn,
          'getAll',
          null,
        ),
        (yn = mn = g.__decorate([Object(m.h)({ name: 'todo', defaults: [vn] })], yn))
      class bn {}
      g.__decorate(
        [Object(m.f)(yn.getByCompletedState(!1)), g.__metadata('design:type', w.a)],
        bn.prototype,
        'uncompletedTodos$',
        void 0,
      ),
        g.__decorate(
          [Object(m.f)(yn.getByCompletedState(!0)), g.__metadata('design:type', w.a)],
          bn.prototype,
          'completedTodos$',
          void 0,
        )
      var Cn = e['\u0275crt']({
        encapsulation: 0,
        styles: [
          [
            'ul[_ngcontent-%COMP%]{list-style:none}\n/*# sourceMappingURL=todo-master.component.css.map*/',
          ],
        ],
        data: {},
      })
      function Pn(n) {
        return e['\u0275vid'](
          0,
          [
            (n()(), e['\u0275eld'](0, 0, null, null, 2, 'li', [], null, null, null, null, null)),
            (n()(),
            e['\u0275eld'](1, 0, null, null, 1, 'app-todo-entry', [], null, null, null, sn, rn)),
            e['\u0275did'](2, 49152, null, 0, an, [m.j], { todo: [0, 'todo'] }, null),
          ],
          function(n, l) {
            n(l, 2, 0, l.context.$implicit)
          },
          null,
        )
      }
      function In(n) {
        return e['\u0275vid'](
          0,
          [
            (n()(), e['\u0275eld'](0, 0, null, null, 3, 'ul', [], null, null, null, null, null)),
            (n()(), e['\u0275and'](16777216, null, null, 2, null, Pn)),
            e['\u0275did'](
              2,
              278528,
              null,
              0,
              d.NgForOf,
              [e.ViewContainerRef, e.TemplateRef, e.IterableDiffers],
              { ngForOf: [0, 'ngForOf'] },
              null,
            ),
            e['\u0275pid'](131072, d.AsyncPipe, [e.ChangeDetectorRef]),
          ],
          function(n, l) {
            var t = l.component
            n(l, 2, 0, e['\u0275unv'](l, 2, 0, e['\u0275nov'](l, 3).transform(t.uncompletedTodos$)))
          },
          null,
        )
      }
      function On(n) {
        return e['\u0275vid'](
          0,
          [
            (n()(), e['\u0275eld'](0, 0, null, null, 1, 'p', [], null, null, null, null, null)),
            (n()(), e['\u0275ted'](-1, null, ['Keine unerledigten Todos.'])),
          ],
          null,
          null,
        )
      }
      function Mn(n) {
        return e['\u0275vid'](
          0,
          [
            (n()(), e['\u0275eld'](0, 0, null, null, 2, 'li', [], null, null, null, null, null)),
            (n()(),
            e['\u0275eld'](1, 0, null, null, 1, 'app-todo-entry', [], null, null, null, sn, rn)),
            e['\u0275did'](2, 49152, null, 0, an, [m.j], { todo: [0, 'todo'] }, null),
          ],
          function(n, l) {
            n(l, 2, 0, l.context.$implicit)
          },
          null,
        )
      }
      function Tn(n) {
        return e['\u0275vid'](
          0,
          [
            (n()(), e['\u0275eld'](0, 0, null, null, 3, 'ul', [], null, null, null, null, null)),
            (n()(), e['\u0275and'](16777216, null, null, 2, null, Mn)),
            e['\u0275did'](
              2,
              278528,
              null,
              0,
              d.NgForOf,
              [e.ViewContainerRef, e.TemplateRef, e.IterableDiffers],
              { ngForOf: [0, 'ngForOf'] },
              null,
            ),
            e['\u0275pid'](131072, d.AsyncPipe, [e.ChangeDetectorRef]),
          ],
          function(n, l) {
            var t = l.component
            n(l, 2, 0, e['\u0275unv'](l, 2, 0, e['\u0275nov'](l, 3).transform(t.completedTodos$)))
          },
          null,
        )
      }
      function wn(n) {
        return e['\u0275vid'](
          0,
          [
            (n()(), e['\u0275eld'](0, 0, null, null, 1, 'p', [], null, null, null, null, null)),
            (n()(),
            e['\u0275ted'](-1, null, [
              'Hier erscheinen alle Todos, die du als erledigt markierst.',
            ])),
          ],
          null,
          null,
        )
      }
      function Rn(n) {
        return e['\u0275vid'](
          0,
          [
            (n()(), e['\u0275eld'](0, 0, null, null, 1, 'h2', [], null, null, null, null, null)),
            (n()(), e['\u0275ted'](-1, null, ['Todos'])),
            (n()(), e['\u0275eld'](2, 0, null, null, 1, 'h3', [], null, null, null, null, null)),
            (n()(), e['\u0275ted'](-1, null, ['Deine Todos'])),
            (n()(), e['\u0275and'](16777216, null, null, 2, null, In)),
            e['\u0275did'](
              5,
              16384,
              null,
              0,
              d.NgIf,
              [e.ViewContainerRef, e.TemplateRef],
              { ngIf: [0, 'ngIf'], ngIfElse: [1, 'ngIfElse'] },
              null,
            ),
            e['\u0275pid'](131072, d.AsyncPipe, [e.ChangeDetectorRef]),
            (n()(), e['\u0275and'](0, [['noUncompletedTodos', 2]], null, 0, null, On)),
            (n()(), e['\u0275eld'](8, 0, null, null, 1, 'h4', [], null, null, null, null, null)),
            (n()(), e['\u0275ted'](-1, null, ['Erledigte Todos'])),
            (n()(), e['\u0275and'](16777216, null, null, 2, null, Tn)),
            e['\u0275did'](
              11,
              16384,
              null,
              0,
              d.NgIf,
              [e.ViewContainerRef, e.TemplateRef],
              { ngIf: [0, 'ngIf'], ngIfElse: [1, 'ngIfElse'] },
              null,
            ),
            e['\u0275pid'](131072, d.AsyncPipe, [e.ChangeDetectorRef]),
            (n()(), e['\u0275and'](0, [['noCompletedTodos', 2]], null, 0, null, wn)),
            (n()(), e['\u0275eld'](14, 0, null, null, 0, 'hr', [], null, null, null, null, null)),
            (n()(), e['\u0275eld'](15, 0, null, null, 1, 'h3', [], null, null, null, null, null)),
            (n()(), e['\u0275ted'](-1, null, ['Todo hinzuf\xfcgen'])),
            (n()(),
            e['\u0275eld'](
              17,
              0,
              null,
              null,
              1,
              'app-form-add-todo',
              [],
              null,
              null,
              null,
              _n,
              fn,
            )),
            e['\u0275did'](18, 49152, null, 0, gn, [m.j], null, null),
          ],
          function(n, l) {
            var t = l.component
            n(
              l,
              5,
              0,
              e['\u0275unv'](l, 5, 0, e['\u0275nov'](l, 6).transform(t.uncompletedTodos$)).length,
              e['\u0275nov'](l, 7),
            ),
              n(
                l,
                11,
                0,
                e['\u0275unv'](l, 11, 0, e['\u0275nov'](l, 12).transform(t.completedTodos$)).length,
                e['\u0275nov'](l, 13),
              )
          },
          null,
        )
      }
      function Sn(n) {
        return e['\u0275vid'](
          0,
          [
            (n()(),
            e['\u0275eld'](0, 0, null, null, 1, 'app-todo-master', [], null, null, null, Rn, Cn)),
            e['\u0275did'](1, 49152, null, 0, bn, [], null, null),
          ],
          null,
          null,
        )
      }
      var kn = e['\u0275ccf']('app-todo-master', bn, Sn, {}, {}, [])
      const En = document.body
      class Ln {
        constructor() {
          ;(this.displayMode = localStorage.getItem('displayMode') || 'dark'),
            (this.toggleMode = () => {
              const n = En.classList.toggle('light') ? 'light' : 'dark'
              localStorage.setItem('displayMode', n), (this.displayMode = n)
            })
        }
        ngOnInit() {
          'dark' === this.displayMode ? En.classList.remove('light') : En.classList.add('light')
        }
      }
      var jn = e['\u0275crt']({
        encapsulation: 0,
        styles: [
          [
            'h1[_ngcontent-%COMP%]{text-transform:uppercase}header[_ngcontent-%COMP%]{text-align:center;max-width:800px;margin:0 auto}a[_ngcontent-%COMP%]{white-space:nowrap}\n/*# sourceMappingURL=top-navigation.component.css.map*/',
          ],
        ],
        data: {},
      })
      function Fn(n) {
        return e['\u0275vid'](
          0,
          [
            (n()(),
            e['\u0275eld'](0, 0, null, null, 12, 'header', [], null, null, null, null, null)),
            (n()(), e['\u0275eld'](1, 0, null, null, 1, 'h1', [], null, null, null, null, null)),
            (n()(), e['\u0275ted'](-1, null, ['Willkommen'])),
            (n()(),
            e['\u0275eld'](
              3,
              0,
              null,
              null,
              2,
              'a',
              [['routerLink', '/portfolio']],
              [[1, 'target', 0], [8, 'href', 4]],
              [[null, 'click']],
              function(n, l, t) {
                var o = !0
                return (
                  'click' === l &&
                    (o =
                      !1 !==
                        e['\u0275nov'](n, 4).onClick(t.button, t.ctrlKey, t.metaKey, t.shiftKey) &&
                      o),
                  o
                )
              },
              null,
              null,
            )),
            e['\u0275did'](
              4,
              671744,
              null,
              0,
              r.o,
              [r.n, r.a, d.LocationStrategy],
              { routerLink: [0, 'routerLink'] },
              null,
            ),
            (n()(), e['\u0275ted'](-1, null, ['DMP Portfolio'])),
            (n()(), e['\u0275ted'](-1, null, [' \xa0 '])),
            (n()(),
            e['\u0275eld'](
              7,
              0,
              null,
              null,
              2,
              'a',
              [['routerLink', '/todo']],
              [[1, 'target', 0], [8, 'href', 4]],
              [[null, 'click']],
              function(n, l, t) {
                var o = !0
                return (
                  'click' === l &&
                    (o =
                      !1 !==
                        e['\u0275nov'](n, 8).onClick(t.button, t.ctrlKey, t.metaKey, t.shiftKey) &&
                      o),
                  o
                )
              },
              null,
              null,
            )),
            e['\u0275did'](
              8,
              671744,
              null,
              0,
              r.o,
              [r.n, r.a, d.LocationStrategy],
              { routerLink: [0, 'routerLink'] },
              null,
            ),
            (n()(), e['\u0275ted'](-1, null, ['Todos'])),
            (n()(), e['\u0275ted'](-1, null, [' \xa0 '])),
            (n()(),
            e['\u0275eld'](
              11,
              0,
              null,
              null,
              1,
              'a',
              [['href', 'javascript:void 0']],
              null,
              [[null, 'click']],
              function(n, l, t) {
                var e = !0
                return 'click' === l && (e = !1 !== n.component.toggleMode() && e), e
              },
              null,
              null,
            )),
            (n()(), e['\u0275ted'](12, null, [' ', ' Modus '])),
          ],
          function(n, l) {
            n(l, 4, 0, '/portfolio'), n(l, 8, 0, '/todo')
          },
          function(n, l) {
            var t = l.component
            n(l, 3, 0, e['\u0275nov'](l, 4).target, e['\u0275nov'](l, 4).href),
              n(l, 7, 0, e['\u0275nov'](l, 8).target, e['\u0275nov'](l, 8).href),
              n(l, 12, 0, 'dark' === t.displayMode ? 'Heller' : 'Dunkler')
          },
        )
      }
      var Dn = e['\u0275crt']({
        encapsulation: 0,
        styles: [
          [
            'app-top-navigation[_ngcontent-%COMP%], main[_ngcontent-%COMP%]{padding:0 1rem;box-sizing:border-box}main[_ngcontent-%COMP%]{max-width:800px;margin:0 auto}app-top-navigation[_ngcontent-%COMP%]{position:relative;display:block;padding-top:1rem;padding-bottom:2rem;background:linear-gradient(to bottom,rgba(255,255,255,.3),transparent)}body.light[_nghost-%COMP%]   app-top-navigation[_ngcontent-%COMP%], body.light   [_nghost-%COMP%]   app-top-navigation[_ngcontent-%COMP%]{background:linear-gradient(to bottom,rgba(0,0,0,.2),transparent)}\n/*# sourceMappingURL=app.component.css.map*/',
          ],
        ],
        data: {},
      })
      function An(n) {
        return e['\u0275vid'](
          0,
          [
            (n()(),
            e['\u0275eld'](
              0,
              0,
              null,
              null,
              1,
              'app-top-navigation',
              [],
              null,
              null,
              null,
              Fn,
              jn,
            )),
            e['\u0275did'](1, 114688, null, 0, Ln, [], null, null),
            (n()(), e['\u0275eld'](2, 0, null, null, 2, 'main', [], null, null, null, null, null)),
            (n()(),
            e['\u0275eld'](
              3,
              16777216,
              null,
              null,
              1,
              'router-outlet',
              [],
              null,
              null,
              null,
              null,
              null,
            )),
            e['\u0275did'](
              4,
              212992,
              null,
              0,
              r.q,
              [r.b, e.ViewContainerRef, e.ComponentFactoryResolver, [8, null], e.ChangeDetectorRef],
              null,
              null,
            ),
          ],
          function(n, l) {
            n(l, 1, 0), n(l, 4, 0)
          },
          null,
        )
      }
      function Nn(n) {
        return e['\u0275vid'](
          0,
          [
            (n()(), e['\u0275eld'](0, 0, null, null, 1, 'app-root', [], null, null, null, An, Dn)),
            e['\u0275did'](1, 49152, null, 0, a, [], null, null),
          ],
          null,
          null,
        )
      }
      var xn = e['\u0275ccf']('app-root', a, Nn, {}, {}, []),
        Hn = t('cUpR'),
        Un = t('AUKP'),
        Bn = t('Mrqg'),
        Vn = t('r35V'),
        $n = t('D/qn'),
        Gn = t('RXmf')
      class zn {}
      class Kn {}
      class qn {}
      class Jn {}
      class Xn {}
      class Zn {}
      class Wn {}
      class Yn {}
      t.d(l, 'a', function() {
        return Qn
      })
      var Qn = e['\u0275cmf'](o, [a], function(n) {
        return e['\u0275mod']([
          e['\u0275mpd'](
            512,
            e.ComponentFactoryResolver,
            e['\u0275CodegenComponentFactoryResolver'],
            [[8, [i.a, H, tn, kn, xn]], [3, e.ComponentFactoryResolver], e.NgModuleRef],
          ),
          e['\u0275mpd'](5120, e.LOCALE_ID, e['\u0275angular_packages_core_core_s'], [
            [3, e.LOCALE_ID],
          ]),
          e['\u0275mpd'](4608, d.NgLocalization, d.NgLocaleLocalization, [
            e.LOCALE_ID,
            [2, d['\u0275angular_packages_common_common_a']],
          ]),
          e['\u0275mpd'](5120, e.APP_ID, e['\u0275angular_packages_core_core_h'], []),
          e['\u0275mpd'](5120, e.IterableDiffers, e['\u0275angular_packages_core_core_q'], []),
          e['\u0275mpd'](5120, e.KeyValueDiffers, e['\u0275angular_packages_core_core_r'], []),
          e['\u0275mpd'](4608, Hn.DomSanitizer, Hn['\u0275DomSanitizerImpl'], [d.DOCUMENT]),
          e['\u0275mpd'](6144, e.Sanitizer, null, [Hn.DomSanitizer]),
          e['\u0275mpd'](4608, Hn.HAMMER_GESTURE_CONFIG, Hn.HammerGestureConfig, []),
          e['\u0275mpd'](
            5120,
            Hn.EVENT_MANAGER_PLUGINS,
            function(n, l, t, e, o, u, a, i) {
              return [
                new Hn['\u0275DomEventsPlugin'](n, l, t),
                new Hn['\u0275KeyEventsPlugin'](e),
                new Hn['\u0275HammerGesturesPlugin'](o, u, a, i),
              ]
            },
            [
              d.DOCUMENT,
              e.NgZone,
              e.PLATFORM_ID,
              d.DOCUMENT,
              d.DOCUMENT,
              Hn.HAMMER_GESTURE_CONFIG,
              e['\u0275Console'],
              [2, Hn.HAMMER_LOADER],
            ],
          ),
          e['\u0275mpd'](4608, Hn.EventManager, Hn.EventManager, [
            Hn.EVENT_MANAGER_PLUGINS,
            e.NgZone,
          ]),
          e['\u0275mpd'](135680, Hn['\u0275DomSharedStylesHost'], Hn['\u0275DomSharedStylesHost'], [
            d.DOCUMENT,
          ]),
          e['\u0275mpd'](4608, Hn['\u0275DomRendererFactory2'], Hn['\u0275DomRendererFactory2'], [
            Hn.EventManager,
            Hn['\u0275DomSharedStylesHost'],
          ]),
          e['\u0275mpd'](6144, e.RendererFactory2, null, [Hn['\u0275DomRendererFactory2']]),
          e['\u0275mpd'](6144, Hn['\u0275SharedStylesHost'], null, [
            Hn['\u0275DomSharedStylesHost'],
          ]),
          e['\u0275mpd'](4608, e.Testability, e.Testability, [e.NgZone]),
          e['\u0275mpd'](4608, Un.d, Un.a, []),
          e['\u0275mpd'](4608, Un.c, Un.c, [m.j, r.n, Un.d, e.NgZone]),
          e['\u0275mpd'](
            4608,
            v['\u0275angular_packages_common_http_http_d'],
            v['\u0275angular_packages_common_http_http_d'],
            [],
          ),
          e['\u0275mpd'](6144, v.XhrFactory, null, [
            v['\u0275angular_packages_common_http_http_d'],
          ]),
          e['\u0275mpd'](4608, v.HttpXhrBackend, v.HttpXhrBackend, [v.XhrFactory]),
          e['\u0275mpd'](6144, v.HttpBackend, null, [v.HttpXhrBackend]),
          e['\u0275mpd'](4608, v.HttpHandler, v['\u0275HttpInterceptingHandler'], [
            v.HttpBackend,
            e.Injector,
          ]),
          e['\u0275mpd'](4608, v.HttpClient, v.HttpClient, [v.HttpHandler]),
          e['\u0275mpd'](4608, B.EmbedVideoService, B.EmbedVideoService, [
            v.HttpClient,
            Hn.DomSanitizer,
          ]),
          e['\u0275mpd'](4608, T, T, [y]),
          e['\u0275mpd'](4608, cn.o, cn.o, []),
          e['\u0275mpd'](4608, yn, yn, []),
          e['\u0275mpd'](5120, r.a, r.C, [r.n]),
          e['\u0275mpd'](4608, r.f, r.f, []),
          e['\u0275mpd'](6144, r.h, null, [r.f]),
          e['\u0275mpd'](135680, r.r, r.r, [
            r.n,
            e.NgModuleFactoryLoader,
            e.Compiler,
            e.Injector,
            r.h,
          ]),
          e['\u0275mpd'](4608, r.g, r.g, []),
          e['\u0275mpd'](5120, r.G, r.y, [r.n, d.ViewportScroller, r.i]),
          e['\u0275mpd'](5120, r.j, r.F, [r.D]),
          e['\u0275mpd'](
            5120,
            e.APP_BOOTSTRAP_LISTENER,
            function(n, l) {
              return [n, m.t(l)]
            },
            [r.j, Bn.a],
          ),
          e['\u0275mpd'](
            4608,
            v.HttpXsrfTokenExtractor,
            v['\u0275angular_packages_common_http_http_g'],
            [d.DOCUMENT, e.PLATFORM_ID, v['\u0275angular_packages_common_http_http_e']],
          ),
          e['\u0275mpd'](
            4608,
            v['\u0275angular_packages_common_http_http_h'],
            v['\u0275angular_packages_common_http_http_h'],
            [v.HttpXsrfTokenExtractor, v['\u0275angular_packages_common_http_http_f']],
          ),
          e['\u0275mpd'](
            5120,
            v.HTTP_INTERCEPTORS,
            function(n) {
              return [n]
            },
            [v['\u0275angular_packages_common_http_http_h']],
          ),
          e['\u0275mpd'](4608, m.b, m.b, [m.w, m.H]),
          e['\u0275mpd'](1073742336, d.CommonModule, d.CommonModule, []),
          e['\u0275mpd'](
            1024,
            e.ErrorHandler,
            Hn['\u0275angular_packages_platform_browser_platform_browser_a'],
            [],
          ),
          e['\u0275mpd'](
            1024,
            e.NgProbeToken,
            function() {
              return [r.x()]
            },
            [],
          ),
          e['\u0275mpd'](512, r.D, r.D, [e.Injector]),
          e['\u0275mpd'](
            1024,
            e.APP_INITIALIZER,
            function(n, l) {
              return [Hn['\u0275angular_packages_platform_browser_platform_browser_j'](n), r.E(l)]
            },
            [[2, e.NgProbeToken], r.D],
          ),
          e['\u0275mpd'](512, e.ApplicationInitStatus, e.ApplicationInitStatus, [
            [2, e.APP_INITIALIZER],
          ]),
          e['\u0275mpd'](131584, e.ApplicationRef, e.ApplicationRef, [
            e.NgZone,
            e['\u0275Console'],
            e.Injector,
            e.ErrorHandler,
            e.ComponentFactoryResolver,
            e.ApplicationInitStatus,
          ]),
          e['\u0275mpd'](1073742336, e.ApplicationModule, e.ApplicationModule, [e.ApplicationRef]),
          e['\u0275mpd'](1073742336, Hn.BrowserModule, Hn.BrowserModule, [[3, Hn.BrowserModule]]),
          e['\u0275mpd'](
            256,
            m.u,
            { developmentMode: !1, compatibility: { strictContentSecurityPolicy: !1 } },
            [],
          ),
          e['\u0275mpd'](1024, m.z, m.s, [m.u]),
          e['\u0275mpd'](512, m.w, m.w, []),
          e['\u0275mpd'](512, m.C, m.C, []),
          e['\u0275mpd'](512, m.i, m.i, []),
          e['\u0275mpd'](256, Vn.g, { key: 'todo' }, []),
          e['\u0275mpd'](1024, Vn.a, Vn.e, [Vn.g]),
          e['\u0275mpd'](1024, Vn.d, Vn.f, [Vn.a]),
          e['\u0275mpd'](256, $n.e, { disabled: !0 }, []),
          e['\u0275mpd'](1024, $n.a, $n.d, [$n.e]),
          e['\u0275mpd'](
            1024,
            m.d,
            function(n, l, t, e) {
              return [new Vn.b(n, l), new $n.b(t, e)]
            },
            [Vn.a, Vn.d, $n.a, e.Injector],
          ),
          e['\u0275mpd'](512, m.G, m.G, [[3, m.G], [2, m.d]]),
          e['\u0275mpd'](512, m.A, m.K, [e.NgZone, e.PLATFORM_ID]),
          e['\u0275mpd'](512, m.H, m.H, [m.A]),
          e['\u0275mpd'](512, m.D, m.D, [e.ErrorHandler, m.w, m.C, m.G, m.i, m.H]),
          e['\u0275mpd'](512, m.I, m.I, [m.z]),
          e['\u0275mpd'](512, m.F, m.F, [m.i, m.D, m.z, m.I]),
          e['\u0275mpd'](512, m.E, m.E, [m.F]),
          e['\u0275mpd'](512, m.B, m.B, [e.Injector, m.z, [3, m.B], m.w, m.C, m.E, m.F]),
          e['\u0275mpd'](512, m.j, m.j, [m.i, m.F, m.z, m.H]),
          e['\u0275mpd'](512, m.v, m.v, [m.j, m.z]),
          e['\u0275mpd'](256, m.x, [], []),
          e['\u0275mpd'](512, Bn.a, Bn.a, []),
          e['\u0275mpd'](512, m.J, m.J, [m.F, m.E, Bn.a]),
          e['\u0275mpd'](1073742336, m.q, m.q, [m.B, m.F, m.j, m.v, [2, m.x], m.J]),
          e['\u0275mpd'](1073742336, Vn.c, Vn.c, []),
          e['\u0275mpd'](
            1024,
            m.y,
            function() {
              return [[Un.c], [T], [yn]]
            },
            [],
          ),
          e['\u0275mpd'](1073742336, m.r, m.r, [m.j, m.F, m.B, [2, m.y], m.J]),
          e['\u0275mpd'](1073742336, Un.b, Un.b, []),
          e['\u0275mpd'](1073742336, m.e, m.e, []),
          e['\u0275mpd'](1073742336, $n.c, $n.c, []),
          e['\u0275mpd'](1073742336, Gn.EmbedVideo, Gn.EmbedVideo, []),
          e['\u0275mpd'](1024, r.w, r.A, [[3, r.n]]),
          e['\u0275mpd'](512, r.u, r.c, []),
          e['\u0275mpd'](512, r.b, r.b, []),
          e['\u0275mpd'](
            256,
            r.i,
            { scrollPositionRestoration: 'enabled', anchorScrolling: 'enabled' },
            [],
          ),
          e['\u0275mpd'](1024, d.LocationStrategy, r.z, [
            d.PlatformLocation,
            [2, d.APP_BASE_HREF],
            r.i,
          ]),
          e['\u0275mpd'](512, d.Location, d.Location, [d.LocationStrategy]),
          e['\u0275mpd'](512, e.Compiler, e.Compiler, []),
          e['\u0275mpd'](512, e.NgModuleFactoryLoader, e.SystemJsNgModuleLoader, [
            e.Compiler,
            [2, e.SystemJsNgModuleLoaderConfig],
          ]),
          e['\u0275mpd'](
            1024,
            r.k,
            function() {
              return [
                [{ path: 'portfolio', component: S }, { path: 'portfolio/:id', component: K }],
                [{ path: 'todo', component: bn }],
                [{ path: '', redirectTo: 'portfolio', pathMatch: 'full' }],
              ]
            },
            [],
          ),
          e['\u0275mpd'](1024, r.n, r.B, [
            e.ApplicationRef,
            r.u,
            r.b,
            d.Location,
            e.Injector,
            e.NgModuleFactoryLoader,
            e.Compiler,
            r.k,
            r.i,
            [2, r.t],
            [2, r.m],
          ]),
          e['\u0275mpd'](1073742336, r.p, r.p, [[2, r.w], [2, r.n]]),
          e['\u0275mpd'](1073742336, zn, zn, []),
          e['\u0275mpd'](1073742336, Kn, Kn, []),
          e['\u0275mpd'](1073742336, qn, qn, []),
          e['\u0275mpd'](1073742336, Jn, Jn, []),
          e['\u0275mpd'](1073742336, cn.m, cn.m, []),
          e['\u0275mpd'](1073742336, cn.d, cn.d, []),
          e['\u0275mpd'](1073742336, Xn, Xn, []),
          e['\u0275mpd'](1073742336, Zn, Zn, []),
          e['\u0275mpd'](1073742336, Wn, Wn, []),
          e['\u0275mpd'](1073742336, v.HttpClientXsrfModule, v.HttpClientXsrfModule, []),
          e['\u0275mpd'](1073742336, v.HttpClientModule, v.HttpClientModule, []),
          e['\u0275mpd'](1073742336, Yn, Yn, []),
          e['\u0275mpd'](1073742336, o, o, []),
          e['\u0275mpd'](256, e['\u0275APP_ROOT'], !0, []),
          e['\u0275mpd'](256, v['\u0275angular_packages_common_http_http_e'], 'XSRF-TOKEN', []),
          e['\u0275mpd'](256, v['\u0275angular_packages_common_http_http_f'], 'X-XSRF-TOKEN', []),
        ])
      })
    },
    crnd: function(n, l) {
      function t(n) {
        return Promise.resolve().then(function() {
          var l = new Error("Cannot find module '" + n + "'")
          throw ((l.code = 'MODULE_NOT_FOUND'), l)
        })
      }
      ;(t.keys = function() {
        return []
      }),
        (t.resolve = t),
        (n.exports = t),
        (t.id = 'crnd')
    },
    zUnb: function(n, l, t) {
      'use strict'
      t.r(l),
        function(n) {
          t.d(l, '\u02750', function() {
            return d
          })
          var e = t('8Y7J'),
            o = t('QzWY'),
            u = t('AytR'),
            a = t('Ss9G'),
            i = t('cUpR')
          u.a.production && Object(e.enableProdMode)()
          const r = () => i.platformBrowser().bootstrapModuleFactory(a.a),
            d = r
          u.a.hmr
            ? Object(o.a)(n, r).catch(n => console.error(n))
            : r().catch(n => console.error(n))
        }.call(this, t('3UD+')(n))
    },
  },
  [[0, 0, 4]],
])
//# sourceMappingURL=main.f9b61b72c05ec359bb61.js.map
