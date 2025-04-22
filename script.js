
document.addEventListener('DOMContentLoaded',()=>{
    /* Welcome toast */
    setTimeout(()=>{document.getElementById('welcome-message').style.display='none';},5000);

    /* Profile zoom */
    const profilePhoto=document.getElementById('profilePhoto');
    profilePhoto.addEventListener('click',()=>{
        profilePhoto.classList.toggle('zoomed');
        if(profilePhoto.classList.contains('zoomed')){
            const overlay=document.createElement('div');
            overlay.className='overlay';
            overlay.addEventListener('click',()=>{
                profilePhoto.classList.remove('zoomed');
                overlay.remove();
            });
            document.body.appendChild(overlay);
        }else{
            document.querySelector('.overlay')?.remove();
        }
    });

    /* Project filtering */
    const filterBtns=document.querySelectorAll('.filter-btn');
    const projectCards=document.querySelectorAll('.project-card');
    filterBtns.forEach(btn=>{
        btn.addEventListener('click',()=>{
            document.querySelector('.filter-btn.active').classList.remove('active');
            btn.classList.add('active');
            const filter=btn.dataset.filter;
            projectCards.forEach(card=>{
                const match=filter==='all'||card.dataset.category===filter;
                card.style.display=match?'block':'none';
            });
        });
    });

    /* Scroll-reveal animation */
    const observer=new IntersectionObserver(entries=>{
        entries.forEach(entry=>{
            if(entry.isIntersecting){
                entry.target.classList.add('reveal');
                observer.unobserve(entry.target);
            }
        });
    },{threshold:0.1});
    document.querySelectorAll('.section, .timeline-item, .project-card').forEach(el=>{
        el.classList.add('hidden');
        observer.observe(el);
    });

    /* Current year in footer */
    document.getElementById('year').textContent=new Date().getFullYear();
});

/* CSS classes toggled by JS for scroll reveal */
const style=document.createElement('style');
style.textContent=`
.hidden{opacity:0;transform:translateY(40px);transition:opacity .6s ease,transform .6s ease;}
.reveal{opacity:1;transform:none;}
.overlay{position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.5);z-index:1000;}
`;
document.head.appendChild(style);
