angular.module('primeiraApp').component('tab', {
    bindings: {
        target: '@',
        iconClass: '@',
        description: '@',
    },
    template: `
    <li>
        <a href data-target="{{ $ctrl.target }}" data-toggle="tab">
            <i class="fa {{ $ctrl.iconClass }}"></i> {{ $ctrl.description }}
        </a>
    </li>    
    `
});