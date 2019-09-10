import { Component, Input, Output, EventEmitter } from '@angular/core'

@Component({
    selector: 'event-thumbnail',
    template: `
        <div class="well hoverwell thumbnail">
        <h2>{{event?.name}}</h2> 
        <div>Date: {{event?.date}}</div>
        <div [ngClass]="getStartTimeClass()">Time: {{event?.time}}</div>
        <div>Price: \${{ event.price }}</div>
        <div>
            <span>Location: {{event?.location.address}}</span> 
            <span>&nbsp;</span>
            <span>{{event?.location.city}}, {{event?.location.country}}</span>
        </div>
    </div>
    `,
    styles: [`
        .green { color: #003300 !important; }
        .bold { font-weight: bold; }
        .thumbnail { min-height: 210px; }
        .pad-left { margin-left: 10px }
        .well div { color: #bbb }
    `]
})

export class EventThumbnailComponent {
    @Input() event: any // Used when constructing child components. 
    
    getStartTimeClass() {
        const isEarlyStart = this.event && this.event.time === '8:00 am'
        return {green: isEarlyStart, bold: isEarlyStart} // Green, bold are css classes.
        // Existing classes will have the conditional classes applied after. 
    }
}
