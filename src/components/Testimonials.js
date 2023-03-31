import React from 'react';

const Testimonials = () => {
    function stopDefAction(evt) { 
        console.log(evt) 
        // evt.preventDefault();  
        // evt.preventDefault();
        // evt.stopPropagation()
        return false;
      } 
    return (
        <section className='section-testimonials'>
            <div className='testimonials-opinions'>
                <img src='resources/images/backgroundTestimonials.svg' alt='backgroundTestimonials' />

                <div>
                    <div class="slider">
                        <div class="slides">
                            <div id="slides__1" class="slide">
                                <iframe title='opinion1' src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpermalink.php%3Fstory_fbid%3Dpfbid02Ktq6FZeg6vSrTSpXGAEFpKVEMmtXrQ3VFJNY3iNRRq4r71wT8dP5syPGyZ8uHgrWl%26id%3D100005317657227&show_text=true&width=500"

                                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
                                <a class="slide__prev" href="#slides__4" title="Next" onClick={stopDefAction}></a>
                                <a class="slide__next" href="#slides__2" title="Next"onClick={stopDefAction}></a>
                            </div>
                            <div id="slides__2" class="slide">
                                <iframe title='opinion2' src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fmildret.sosa%2Fposts%2Fpfbid02pvQuZteKrJqZKZQCHNKLkyuMK582hGHEoGxkaxSnekhZAYPidWANnHUWVhQWuWN2l&show_text=true&width=500"

                                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
                                <a class="slide__prev" href="#slides__1" title="Prev"></a>
                                <a class="slide__next" href="#slides__3" title="Next"></a>
                            </div>
                            <div id="slides__3" class="slide">
                                <iframe title='opinion3' src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpauliina.pez%2Fposts%2Fpfbid0CYapdmpU7JK1sBCXpFBwCCJvQyoBZPGzFvUDDhEjxp1x3Qq98dHtjb1rPMrRrYV7l&show_text=true&width=500"
                                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
                                <a class="slide__prev" href="#slides__2" title="Prev"></a>
                                <a class="slide__next" href="#slides__4" title="Next"></a>
                            </div>
                            <div id="slides__4" class="slide">
                                <iframe title='opinion4' src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fbayron.bonillachico%2Fposts%2Fpfbid02YWKUH2s8KibAAecW2u1XdbTDUN4tXVt2KT1Lvx7moD9i8ZFhmHimfgMzmuqnAcTMl&show_text=true&width=500"
                                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
                                <a class="slide__prev" href="#slides__3" title="Prev"></a>
                                <a class="slide__next" href="#slides__1" title="Prev"></a>
                            </div>
                        </div>
               
                    </div>
                </div>

            </div>

        </section>
    )
}

export default Testimonials;