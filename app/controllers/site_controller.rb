class SiteController < ApplicationController
  def index
    @site_props = { queries: [
        {
            name: '.NET',
            value: '({0} OR {1} OR {2} OR {3} OR {4})',
            keys: ['.net', 'dotnet', 'ASP NET', 'C#', 'C++/CLI']
        },
        {
            name: '.net',
            value: '.net',
            keys: []
        },
        {
            name: 'dotnet',
            value: 'dotnet',
            keys: []
        },
        {
            name: 'ASP NET',
            value: 'ASP NET',
            keys: []
        },
        {
            name: 'C#',
            value: 'C#',
            keys: []
        },
        {
            name: 'C++/CLI',
            value: 'C++/CLI',
            keys: []
        }
    ]}
  end
end
