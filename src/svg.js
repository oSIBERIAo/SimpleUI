try {
    !(function (d) {
        var a,
            i =
                '<svg><symbol id="icon-alert" viewBox="0 0 1024 1024"><path d="M512 0c282.7776 0 512 229.2224 512 512s-229.2224 512-512 512S0 794.7776 0 512 229.2224 0 512 0z m0 102.4a409.6 409.6 0 1 0 0 819.2 409.6 409.6 0 0 0 0-819.2z m0 486.4a51.2 51.2 0 0 1-51.2-51.2v-204.8a51.2 51.2 0 0 1 102.4 0v204.8a51.2 51.2 0 0 1-51.2 51.2z m0 179.2a51.2 51.2 0 1 1 0-102.4 51.2 51.2 0 0 1 0 102.4z"  ></path></symbol><symbol id="icon-loading" viewBox="0 0 1024 1024"><path d="M469.333333 85.333333a42.666667 42.666667 0 0 1 85.333334 0v170.666667a42.666667 42.666667 0 0 1-85.333334 0z m0 682.666667a42.666667 42.666667 0 0 1 85.333334 0v170.666667a42.666667 42.666667 0 0 1-85.333334 0zM180.181333 240.512a42.666667 42.666667 0 0 1 60.330667-60.330667l120.746667 120.746667a42.666667 42.666667 0 0 1-60.330667 60.330667z m482.56 482.56a42.666667 42.666667 0 0 1 60.330667-60.330667l120.746667 120.746667a42.666667 42.666667 0 0 1-60.330667 60.330667zM85.333333 554.666667a42.666667 42.666667 0 0 1 0-85.333334h170.666667a42.666667 42.666667 0 0 1 0 85.333334z m682.666667 0a42.666667 42.666667 0 0 1 0-85.333334h170.666667a42.666667 42.666667 0 0 1 0 85.333334zM240.512 843.818667a42.666667 42.666667 0 1 1-60.330667-60.330667l120.746667-120.746667a42.666667 42.666667 0 1 1 60.330667 60.330667z m482.56-482.56a42.666667 42.666667 0 0 1-60.330667-60.330667l120.746667-120.746667a42.666667 42.666667 0 0 1 60.330667 60.330667z"  ></path></symbol><symbol id="icon-left" viewBox="0 0 1024 1024"><path d="M444.330667 512l183.168 183.168a42.666667 42.666667 0 0 1-60.330667 60.330667l-213.333333-213.333334a42.666667 42.666667 0 0 1 0-60.330666l213.333333-213.333334a42.666667 42.666667 0 0 1 60.330667 60.330667z"  ></path></symbol><symbol id="icon-download" viewBox="0 0 1024 1024"><path d="M469.333333 579.669333V85.333333a42.666667 42.666667 0 0 1 85.333334 0v494.336l97.834666-97.834666a42.666667 42.666667 0 0 1 60.330667 60.330666l-170.666667 170.666667a42.666667 42.666667 0 0 1-60.330666 0l-170.666667-170.666667a42.666667 42.666667 0 0 1 60.330667-60.330666zM85.333333 725.333333a42.666667 42.666667 0 0 1 85.333334 0v128a42.666667 42.666667 0 0 0 42.666666 42.666667h597.333334a42.666667 42.666667 0 0 0 42.666666-42.666667v-128a42.666667 42.666667 0 0 1 85.333334 0v128a128 128 0 0 1-128 128H213.333333a128 128 0 0 1-128-128z"  ></path></symbol><symbol id="icon-right" viewBox="0 0 1024 1024"><path d="M579.669333 512L396.501333 328.832a42.666667 42.666667 0 1 1 60.330667-60.330667l213.333333 213.333334a42.666667 42.666667 0 0 1 0 60.330666l-213.333333 213.333334a42.666667 42.666667 0 1 1-60.330667-60.330667z"  ></path></symbol><symbol id="icon-setting" viewBox="0 0 1024 1024"><path d="M866.090667 371.84A27.605333 27.605333 0 0 0 888.746667 384H896a128 128 0 0 1 0 256h-3.669333a27.733333 27.733333 0 0 0-25.386667 16.810667 27.733333 27.733333 0 0 0 5.034667 30.677333l2.56 2.56a128 128 0 1 1-181.077334 181.077333l-2.218666-2.218666a27.904 27.904 0 0 0-31.018667-5.376 27.690667 27.690667 0 0 0-16.810667 25.216V896a128 128 0 0 1-256 0 29.781333 29.781333 0 0 0-20.650666-29.226667 27.605333 27.605333 0 0 0-30.250667 5.205334l-2.56 2.56a128 128 0 1 1-181.077333-181.077334l2.218666-2.218666a27.904 27.904 0 0 0 5.376-31.018667 27.690667 27.690667 0 0 0-25.216-16.810667H128a128 128 0 0 1 0-256 29.781333 29.781333 0 0 0 29.226667-20.650666 27.605333 27.605333 0 0 0-5.205334-30.250667l-2.56-2.56a128 128 0 1 1 181.077334-181.077333l2.218666 2.218666a27.733333 27.733333 0 0 0 30.592 5.546667 42.666667 42.666667 0 0 1 8.533334-2.730667A27.605333 27.605333 0 0 0 384 135.253333V128a128 128 0 0 1 256 0v3.669333c0.042667 11.093333 6.656 21.034667 17.237333 25.6a27.605333 27.605333 0 0 0 30.250667-5.248l2.56-2.56a128 128 0 1 1 181.077333 181.077334l-2.218666 2.218666a27.733333 27.733333 0 0 0-5.546667 30.592 42.666667 42.666667 0 0 1 2.730667 8.533334zM389.504 242.005333a113.28 113.28 0 0 1-116.736-26.24l-2.56-2.56a42.666667 42.666667 0 1 0-60.416 60.416l2.901333 2.901334c32.298667 33.024 41.258667 82.432 23.637334 122.197333A113.365333 113.365333 0 0 1 131.84 472.746667H128a42.666667 42.666667 0 0 0 0 85.333333h7.424a112.896 112.896 0 0 1 103.253333 68.096 113.237333 113.237333 0 0 1-22.912 125.056l-2.56 2.56a42.666667 42.666667 0 1 0 60.416 60.416l2.901334-2.901333c33.024-32.298667 82.432-41.258667 122.197333-23.637334a113.365333 113.365333 0 0 1 74.026667 104.490667V896a42.666667 42.666667 0 0 0 85.333333 0v-7.424a112.896 112.896 0 0 1 68.096-103.253333 113.237333 113.237333 0 0 1 125.056 22.912l2.56 2.56a42.666667 42.666667 0 1 0 60.416-60.416l-2.901333-2.901334a113.066667 113.066667 0 0 1-22.613334-124.714666A112.981333 112.981333 0 0 1 892.16 554.666667H896a42.666667 42.666667 0 0 0 0-85.333334h-7.424a113.066667 113.066667 0 0 1-103.466667-68.522666 42.666667 42.666667 0 0 1-3.114666-11.264 113.28 113.28 0 0 1 26.24-116.778667l2.56-2.56a42.666667 42.666667 0 1 0-60.416-60.416l-2.901334 2.901333a112.896 112.896 0 0 1-124.288 22.784A113.109333 113.109333 0 0 1 554.666667 131.84V128a42.666667 42.666667 0 0 0-85.333334 0v7.424a113.066667 113.066667 0 0 1-68.522666 103.466667 42.666667 42.666667 0 0 1-11.264 3.114666zM512 682.666667a170.666667 170.666667 0 1 1 0-341.333334 170.666667 170.666667 0 0 1 0 341.333334z m0-85.333334a85.333333 85.333333 0 1 0 0-170.666666 85.333333 85.333333 0 0 0 0 170.666666z"  ></path></symbol><symbol id="icon-line" viewBox="0 0 1024 1024"><path d="M318.037333 938.666667H201.685333A116.352 116.352 0 0 1 85.333333 822.314667v-271.530667a116.352 116.352 0 0 1 116.352-116.352h91.178667L437.76 108.373333a38.826667 38.826667 0 0 1 35.413333-23.04 155.136 155.136 0 0 1 155.178667 155.136v116.394667h180.309333A116.352 116.352 0 0 1 925.013333 490.666667l-53.504 349.013333A116.266667 116.266667 0 0 1 755.584 938.666667z m38.826667-77.568h399.146667a38.826667 38.826667 0 0 0 38.826666-33.024l53.504-349.013334a38.826667 38.826667 0 0 0-39.253333-44.629333h-219.52a38.826667 38.826667 0 0 1-38.784-38.826667V240.512c0-34.602667-22.698667-63.914667-53.973333-73.898667l-139.946667 314.88zM279.253333 512H201.685333a38.826667 38.826667 0 0 0-38.784 38.784v271.530667c0 21.418667 17.365333 38.784 38.826667 38.784h77.525333z"  ></path></symbol></svg>',
            e = (a = document.getElementsByTagName('script'))[
                a.length - 1
            ].getAttribute('data-injectcss')
        if (e && !d.__iconfont__svg__cssinject__) {
            d.__iconfont__svg__cssinject__ = !0
            try {
                document.write(
                    '<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>'
                )
            } catch (a) {
                console && console.log(a)
            }
        }
        !(function (a) {
            if (document.addEventListener)
                if (
                    ~['complete', 'loaded', 'interactive'].indexOf(
                        document.readyState
                    )
                )
                    setTimeout(a, 0)
                else {
                    var e = function () {
                        document.removeEventListener('DOMContentLoaded', e, !1),
                            a()
                    }
                    document.addEventListener('DOMContentLoaded', e, !1)
                }
            else
                document.attachEvent &&
                    ((l = a),
                    (o = d.document),
                    (n = !1),
                    (i = function () {
                        try {
                            o.documentElement.doScroll('left')
                        } catch (a) {
                            return void setTimeout(i, 50)
                        }
                        t()
                    })(),
                    (o.onreadystatechange = function () {
                        'complete' == o.readyState &&
                            ((o.onreadystatechange = null), t())
                    }))

            function t() {
                n || ((n = !0), l())
            }

            var l, o, n, i
        })(function () {
            var a, e, t, l, o, n
            ;((a = document.createElement('div')).innerHTML = i),
                (i = null),
                (e = a.getElementsByTagName('svg')[0]) &&
                    (e.setAttribute('aria-hidden', 'true'),
                    (e.style.position = 'absolute'),
                    (e.style.width = 0),
                    (e.style.height = 0),
                    (e.style.overflow = 'hidden'),
                    (t = e),
                    (l = document.body).firstChild
                        ? ((o = t),
                          (n = l.firstChild).parentNode.insertBefore(o, n))
                        : l.appendChild(t))
        })
    })(window)
} catch (e) {}
