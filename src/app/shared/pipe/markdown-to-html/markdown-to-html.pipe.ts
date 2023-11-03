import {Pipe, PipeTransform} from '@angular/core';
import {marked} from 'marked';

@Pipe({
  name: 'markdownToHtml'
})
export class MarkdownToHtmlPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    return marked.parse(value);
  }

}
