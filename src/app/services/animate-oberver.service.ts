import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AnimateOberverService {
  observeElementForAnimation(element: HTMLElement, animationClass: string): void {
    const options = {
      threshold: 0.5 // Adjust this threshold as needed
    };

    const observer = new IntersectionObserver(entries => this.addAnimationClass(entries, animationClass, observer), options);

    observer.observe(element);
  }

  private addAnimationClass(entries: IntersectionObserverEntry[], animationClass: string, observer: IntersectionObserver): void {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add(animationClass);
        entry.target.classList.add('animate__animated'); // Add animate__animated class if needed
        observer.unobserve(entry.target);
      }
    });
  }
}
