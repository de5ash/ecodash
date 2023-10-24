// locomotivejs - for smooth scrolling
const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});
// gsap to animate
gsap.from(".nlink", {
    stagger: .2,
    y: 10,
    opacity: 0,
    duration: 1,
    ease: Power2
})

Shery.textAnimate("#headings h1", {
    style: 2,
    delay: 0.5,
    duration: 2,
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    multiplier: 0.1,
});

gsap.from(".anim2", {
    y: 50,
    opacity: 0,
    ease: Expo,
    duration: 1,
    stagger: 0.3

})

Shery.imageEffect("#imagentext img", {
    style: 4,
    config: { "uColor": { "value": false }, "uSpeed": { "value": 1, "range": [0.1, 1], "rangep": [1, 10] }, "uAmplitude": { "value": 4.17, "range": [0, 5] }, "uFrequency": { "value": 1.98, "range": [0, 10] }, "geoVertex": { "range": [1, 64], "value": 5.69 }, "zindex": { "value": -9996999, "range": [-9999999, 9999999] }, "aspect": { "value": 0.75 }, "gooey": { "value": false }, "infiniteGooey": { "value": false }, "growSize": { "value": 4, "range": [1, 15] }, "durationOut": { "value": 1, "range": [0.1, 5] }, "durationIn": { "value": 1.5, "range": [0.1, 5] }, "displaceAmount": { "value": 0.5 }, "masker": { "value": true }, "maskVal": { "value": 1.2, "range": [1, 5] }, "scrollType": { "value": 0 }, "noEffectGooey": { "value": true }, "onMouse": { "value": 0 }, "noise_speed": { "value": 0.2, "range": [0, 10] }, "metaball": { "value": 0.2, "range": [0, 2] }, "discard_threshold": { "value": 0.5, "range": [0, 1] }, "antialias_threshold": { "value": 0.002, "range": [0, 0.1] }, "noise_height": { "value": 0.5, "range": [0, 2] }, "noise_scale": { "value": 10, "range": [0, 100] } },
    // debug: true
})

Shery.imageEffect("#susimagewrapper img", {
    style: 4,
    config: { "uColor": { "value": false }, "uSpeed": { "value": 1, "range": [0.1, 1], "rangep": [1, 10] }, "uAmplitude": { "value": 4.17, "range": [0, 5] }, "uFrequency": { "value": 1.98, "range": [0, 10] }, "geoVertex": { "range": [1, 64], "value": 5.69 }, "zindex": { "value": -9996999, "range": [-9999999, 9999999] }, "aspect": { "value": 0.75 }, "gooey": { "value": false }, "infiniteGooey": { "value": false }, "growSize": { "value": 4, "range": [1, 15] }, "durationOut": { "value": 1, "range": [0.1, 5] }, "durationIn": { "value": 1.5, "range": [0.1, 5] }, "displaceAmount": { "value": 0.5 }, "masker": { "value": true }, "maskVal": { "value": 1.2, "range": [1, 5] }, "scrollType": { "value": 0 }, "noEffectGooey": { "value": true }, "onMouse": { "value": 1 }, "noise_speed": { "value": 0.2, "range": [0, 10] }, "metaball": { "value": 0.2, "range": [0, 2] }, "discard_threshold": { "value": 0.5, "range": [0, 1] }, "antialias_threshold": { "value": 0.002, "range": [0, 0.1] }, "noise_height": { "value": 0.5, "range": [0, 2] }, "noise_scale": { "value": 10, "range": [0, 100] } },
    // debug: true
})

gsap.from("#imagentext img", {
    z: -3,
    // y: 70,
    opacity: 0,
    duration: 2,
    ease: Expo.easenInOut
})

Shery.imageEffect(".imgeff img", {
    style: 3,
    config: { "uColor": { "value": false }, "uSpeed": { "value": 1, "range": [0.1, 1], "rangep": [1, 10] }, "uAmplitude": { "value": 4.17, "range": [0, 5] }, "uFrequency": { "value": 1.98, "range": [0, 10] }, "geoVertex": { "range": [1, 64], "value": 5.69 }, "zindex": { "value": -9996999, "range": [-9999999, 9999999] }, "aspect": { "value": 0.75 }, "gooey": { "value": false }, "infiniteGooey": { "value": false }, "growSize": { "value": 4, "range": [1, 15] }, "durationOut": { "value": 1, "range": [0.1, 5] }, "durationIn": { "value": 1.5, "range": [0.1, 5] }, "displaceAmount": { "value": 0.5 }, "masker": { "value": true }, "maskVal": { "value": 1.2, "range": [1, 5] }, "scrollType": { "value": 0 }, "noEffectGooey": { "value": true }, "onMouse": { "value": 1 }, "noise_speed": { "value": 0.2, "range": [0, 10] }, "metaball": { "value": 0.2, "range": [0, 2] }, "discard_threshold": { "value": 0.5, "range": [0, 1] }, "antialias_threshold": { "value": 0.002, "range": [0, 0.1] }, "noise_height": { "value": 0.5, "range": [0, 2] }, "noise_scale": { "value": 10, "range": [0, 100] } },
    // debug: true
})

Shery.imageEffect("#bimg", {
    style: 5,
    gooey: true
})

document.querySelector("#ftext button").addEventListener("mouseover", function () {
    gsap.to("#future video", {
        opacity: 1,
        duration: 1.5,
        ease: Power4
    })
})

document.querySelector("#ftext button").addEventListener("mouseleave", function () {
    gsap.to("#future video", {
        opacity: 0,
        duration: 1.5,
        ease: Power4
    });
});


