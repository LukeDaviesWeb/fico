var $=jQuery;function toggleMobileMenu(){let e=$(".mobile-menu-icon"),n=$(".mobile-menu-slidout");$(e).click(function(){$(n).hasClass("display-none")?$(n).removeClass("display-none"):$(n).addClass("display-none")}),$(".menu-exit-icon").click(function(){$(n).addClass("display-none")})}function hideMobileOnResize(){let e=$(window).width(),n=$(".mobile-menu-slidout");e>450&&$(n).addClass("display-none")}function submitFormToSheets(){$formData=$(".wpcf7-form").serializeObject();$.ajax({url:"https://script.google.com/macros/s/AKfycbzlRsZNn0Tn0w35F-HklCu4fOrTO-QJ3L_icTjmdYfdPe_jYTU/exec",method:"GET",dataType:"json",data:$formData}).success(console.log("submitted to google sheets"))}function openModal(){document.getElementById("myModal").style.display="block"}function closeModal(){document.getElementById("myModal").style.display="none"}$(document).ready(function(){toggleMobileMenu(),hideMobileOnResize(),$(window).resize(hideMobileOnResize)}),document.addEventListener("wpcf7submit",function(e){submitFormToSheets()},!1),$.fn.serializeObject=function(){var e={},n=this.serializeArray();return $.each(n,function(){e[this.name]?(e[this.name].push||(e[this.name]=[e[this.name]]),e[this.name].push(this.value||"")):e[this.name]=this.value||""}),e};var slideIndex=1;function plusSlides(e){showSlides(slideIndex+=e)}function currentSlide(e){showSlides(slideIndex=e)}function showSlides(e){var n,s=document.getElementsByClassName("mySlides"),i=document.getElementsByClassName("demo"),l=document.getElementById("caption");for(e>s.length&&(slideIndex=1),e<1&&(slideIndex=s.length),n=0;n<s.length;n++)s[n].style.display="none";for(n=0;n<i.length;n++)i[n].className=i[n].className.replace(" active","");s[slideIndex-1].style.display="flex",i[slideIndex-1].className+=" active",l.innerHTML=i[slideIndex-1].alt}showSlides(slideIndex);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNjcmlwdC5qcyJdLCJuYW1lcyI6WyIkIiwialF1ZXJ5IiwidG9nZ2xlTW9iaWxlTWVudSIsIm1vYmlsZUljb25Db250YWluZXIiLCJtb2JpbGVNZW51IiwiY2xpY2siLCJoYXNDbGFzcyIsInJlbW92ZUNsYXNzIiwiYWRkQ2xhc3MiLCJoaWRlTW9iaWxlT25SZXNpemUiLCJ3aW5kb3dXaWR0aCIsIndpbmRvdyIsIndpZHRoIiwic3VibWl0Rm9ybVRvU2hlZXRzIiwiJGZvcm1EYXRhIiwic2VyaWFsaXplT2JqZWN0IiwiYWpheCIsInVybCIsIm1ldGhvZCIsImRhdGFUeXBlIiwiZGF0YSIsInN1Y2Nlc3MiLCJjb25zb2xlIiwibG9nIiwib3Blbk1vZGFsIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInN0eWxlIiwiZGlzcGxheSIsImNsb3NlTW9kYWwiLCJyZWFkeSIsInJlc2l6ZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJldmVudCIsImZuIiwibyIsImEiLCJ0aGlzIiwic2VyaWFsaXplQXJyYXkiLCJlYWNoIiwibmFtZSIsInB1c2giLCJ2YWx1ZSIsInNsaWRlSW5kZXgiLCJwbHVzU2xpZGVzIiwibiIsInNob3dTbGlkZXMiLCJjdXJyZW50U2xpZGUiLCJpIiwic2xpZGVzIiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsImRvdHMiLCJjYXB0aW9uVGV4dCIsImxlbmd0aCIsImNsYXNzTmFtZSIsInJlcGxhY2UiLCJpbm5lckhUTUwiLCJhbHQiXSwibWFwcGluZ3MiOiJBQUFBLElBQUlBLEVBQUlDLE9Bc0NSLFNBQVNDLG1CQUVQLElBQUlDLEVBQXNCSCxFQUFFLHFCQUN4QkksRUFBYUosRUFBRSx3QkFFbkJBLEVBQUVHLEdBQXFCRSxNQUFNLFdBQ3ZCTCxFQUFFSSxHQUFZRSxTQUFTLGdCQUN6Qk4sRUFBRUksR0FBWUcsWUFBWSxnQkFFMUJQLEVBQUVJLEdBQVlJLFNBQVMsa0JBSTNCUixFQUFFLG1CQUFtQkssTUFBTSxXQUN6QkwsRUFBRUksR0FBWUksU0FBUyxrQkFJM0IsU0FBU0MscUJBRVAsSUFBSUMsRUFBY1YsRUFBRVcsUUFBUUMsUUFDeEJSLEVBQWFKLEVBQUUsd0JBRWZVLEVBQWMsS0FDaEJWLEVBQUVJLEdBQVlJLFNBQVMsZ0JBSTNCLFNBQVNLLHFCQUlQQyxVQUFZZCxFQUFFLGVBQWVlLGtCQUVqQmYsRUFBRWdCLEtBQUssQ0FDakJDLElBSkEsa0dBS0FDLE9BQVEsTUFDUkMsU0FBVSxPQUNWQyxLQUFNTixZQUNMTyxRQUFRQyxRQUFRQyxJQUFJLCtCQU96QixTQUFTQyxZQUNQQyxTQUFTQyxlQUFlLFdBQVdDLE1BQU1DLFFBQVUsUUFJckQsU0FBU0MsYUFDUEosU0FBU0MsZUFBZSxXQUFXQyxNQUFNQyxRQUFVLE9BeEZyRDVCLEVBQUV5QixVQUFVSyxNQUFNLFdBRWhCNUIsbUJBQ0FPLHFCQUdBVCxFQUFFVyxRQUFRb0IsT0FBT3RCLHNCQUluQmdCLFNBQVNPLGlCQUNQLGNBQ0EsU0FBVUMsR0FDUnBCLHVCQUVGLEdBSUZiLEVBQUVrQyxHQUFHbkIsZ0JBQWtCLFdBQ3JCLElBQUlvQixFQUFJLEdBQ0pDLEVBQUlDLEtBQUtDLGlCQVdiLE9BVkF0QyxFQUFFdUMsS0FBS0gsRUFBRyxXQUNKRCxFQUFFRSxLQUFLRyxPQUNKTCxFQUFFRSxLQUFLRyxNQUFNQyxPQUNoQk4sRUFBRUUsS0FBS0csTUFBUSxDQUFDTCxFQUFFRSxLQUFLRyxRQUV6QkwsRUFBRUUsS0FBS0csTUFBTUMsS0FBS0osS0FBS0ssT0FBUyxLQUVoQ1AsRUFBRUUsS0FBS0csTUFBUUgsS0FBS0ssT0FBUyxLQUcxQlAsR0EyRFQsSUFBSVEsV0FBYSxFQUlqQixTQUFTQyxXQUFXQyxHQUNsQkMsV0FBV0gsWUFBY0UsR0FJM0IsU0FBU0UsYUFBYUYsR0FDcEJDLFdBQVdILFdBQWFFLEdBRzFCLFNBQVNDLFdBQVdELEdBQ2xCLElBQUlHLEVBQ0FDLEVBQVN4QixTQUFTeUIsdUJBQXVCLFlBQ3pDQyxFQUFPMUIsU0FBU3lCLHVCQUF1QixRQUN2Q0UsRUFBYzNCLFNBQVNDLGVBQWUsV0FHMUMsSUFGSW1CLEVBQUlJLEVBQU9JLFNBQVVWLFdBQWEsR0FDbENFLEVBQUksSUFBS0YsV0FBYU0sRUFBT0ksUUFDNUJMLEVBQUksRUFBR0EsRUFBSUMsRUFBT0ksT0FBUUwsSUFDN0JDLEVBQU9ELEdBQUdyQixNQUFNQyxRQUFVLE9BRTVCLElBQUtvQixFQUFJLEVBQUdBLEVBQUlHLEVBQUtFLE9BQVFMLElBQzNCRyxFQUFLSCxHQUFHTSxVQUFZSCxFQUFLSCxHQUFHTSxVQUFVQyxRQUFRLFVBQVcsSUFFM0ROLEVBQU9OLFdBQWEsR0FBR2hCLE1BQU1DLFFBQVUsT0FDdkN1QixFQUFLUixXQUFhLEdBQUdXLFdBQWEsVUFDbENGLEVBQVlJLFVBQVlMLEVBQUtSLFdBQWEsR0FBR2MsSUEzQi9DWCxXQUFXSCIsInNvdXJjZXNDb250ZW50IjpbInZhciAkID0galF1ZXJ5O1xuXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoKSB7XG4gIC8vY2FsbCBmdW5jdGlvbnNcbiAgdG9nZ2xlTW9iaWxlTWVudSgpO1xuICBoaWRlTW9iaWxlT25SZXNpemUoKTtcblxuICAvL2JpbmQgZXZlbnQgbGlzdGVuZXJzIG9uY2UgZG9jIHJlYWR5XG4gICQod2luZG93KS5yZXNpemUoaGlkZU1vYmlsZU9uUmVzaXplKTtcbn0pO1xuXG4vL2V2ZW50IGxpc3RlbmVyc1xuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcbiAgJ3dwY2Y3c3VibWl0JyxcbiAgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgc3VibWl0Rm9ybVRvU2hlZXRzKCk7XG4gIH0sXG4gIGZhbHNlXG4pO1xuXG4vL3NldHVwIGZ1bmN0aW9uc1xuJC5mbi5zZXJpYWxpemVPYmplY3QgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBvID0ge307XG4gIHZhciBhID0gdGhpcy5zZXJpYWxpemVBcnJheSgpO1xuICAkLmVhY2goYSwgZnVuY3Rpb24gKCkge1xuICAgIGlmIChvW3RoaXMubmFtZV0pIHtcbiAgICAgIGlmICghb1t0aGlzLm5hbWVdLnB1c2gpIHtcbiAgICAgICAgb1t0aGlzLm5hbWVdID0gW29bdGhpcy5uYW1lXV07XG4gICAgICB9XG4gICAgICBvW3RoaXMubmFtZV0ucHVzaCh0aGlzLnZhbHVlIHx8ICcnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgb1t0aGlzLm5hbWVdID0gdGhpcy52YWx1ZSB8fCAnJztcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gbztcbn07XG5cbi8vZGVmaW5lIGN1c3RvbSBmdW5jdGlvbnMgaGVyZVxuZnVuY3Rpb24gdG9nZ2xlTW9iaWxlTWVudSgpIHtcbiAgLy92YXJpYWJsZXNcbiAgbGV0IG1vYmlsZUljb25Db250YWluZXIgPSAkKCcubW9iaWxlLW1lbnUtaWNvbicpO1xuICBsZXQgbW9iaWxlTWVudSA9ICQoJy5tb2JpbGUtbWVudS1zbGlkb3V0Jyk7XG4gIC8vZnVuY1xuICAkKG1vYmlsZUljb25Db250YWluZXIpLmNsaWNrKGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoJChtb2JpbGVNZW51KS5oYXNDbGFzcygnZGlzcGxheS1ub25lJykpIHtcbiAgICAgICQobW9iaWxlTWVudSkucmVtb3ZlQ2xhc3MoJ2Rpc3BsYXktbm9uZScpO1xuICAgIH0gZWxzZSB7XG4gICAgICAkKG1vYmlsZU1lbnUpLmFkZENsYXNzKCdkaXNwbGF5LW5vbmUnKTtcbiAgICB9XG4gIH0pO1xuXG4gICQoJy5tZW51LWV4aXQtaWNvbicpLmNsaWNrKGZ1bmN0aW9uICgpIHtcbiAgICAkKG1vYmlsZU1lbnUpLmFkZENsYXNzKCdkaXNwbGF5LW5vbmUnKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGhpZGVNb2JpbGVPblJlc2l6ZSgpIHtcbiAgLy92YXJpYWJsZXNcbiAgbGV0IHdpbmRvd1dpZHRoID0gJCh3aW5kb3cpLndpZHRoKCk7XG4gIGxldCBtb2JpbGVNZW51ID0gJCgnLm1vYmlsZS1tZW51LXNsaWRvdXQnKTtcbiAgLy9mdW5jXG4gIGlmICh3aW5kb3dXaWR0aCA+IDQ1MCkge1xuICAgICQobW9iaWxlTWVudSkuYWRkQ2xhc3MoJ2Rpc3BsYXktbm9uZScpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHN1Ym1pdEZvcm1Ub1NoZWV0cygpIHtcbiAgLy92YXJpYWJsZXNcbiAgbGV0IHVybCA9XG4gICAgJ2h0dHBzOi8vc2NyaXB0Lmdvb2dsZS5jb20vbWFjcm9zL3MvQUtmeWNiemxSc1pObjBUbjB3MzVGLUhrbEN1NGZPclRPLVFKM0xfaWNUam1kWWZkUGVfallUVS9leGVjJztcbiAgJGZvcm1EYXRhID0gJCgnLndwY2Y3LWZvcm0nKS5zZXJpYWxpemVPYmplY3QoKTtcblxuICB2YXIganF4aHIgPSAkLmFqYXgoe1xuICAgIHVybDogdXJsLFxuICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgZGF0YVR5cGU6ICdqc29uJyxcbiAgICBkYXRhOiAkZm9ybURhdGFcbiAgfSkuc3VjY2Vzcyhjb25zb2xlLmxvZygnc3VibWl0dGVkIHRvIGdvb2dsZSBzaGVldHMnKSk7XG59XG5cblxuLy9Nb2RhbCBsaWdodGJveCBnYWxsZXJ5XG5cbi8vIE9wZW4gdGhlIE1vZGFsXG5mdW5jdGlvbiBvcGVuTW9kYWwoKSB7XG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdteU1vZGFsJykuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbn1cblxuLy8gQ2xvc2UgdGhlIE1vZGFsXG5mdW5jdGlvbiBjbG9zZU1vZGFsKCkge1xuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbXlNb2RhbCcpLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbn1cblxudmFyIHNsaWRlSW5kZXggPSAxO1xuc2hvd1NsaWRlcyhzbGlkZUluZGV4KTtcblxuLy8gTmV4dC9wcmV2aW91cyBjb250cm9sc1xuZnVuY3Rpb24gcGx1c1NsaWRlcyhuKSB7XG4gIHNob3dTbGlkZXMoc2xpZGVJbmRleCArPSBuKTtcbn1cblxuLy8gVGh1bWJuYWlsIGltYWdlIGNvbnRyb2xzXG5mdW5jdGlvbiBjdXJyZW50U2xpZGUobikge1xuICBzaG93U2xpZGVzKHNsaWRlSW5kZXggPSBuKTtcbn1cblxuZnVuY3Rpb24gc2hvd1NsaWRlcyhuKSB7XG4gIHZhciBpO1xuICB2YXIgc2xpZGVzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcIm15U2xpZGVzXCIpO1xuICB2YXIgZG90cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJkZW1vXCIpO1xuICB2YXIgY2FwdGlvblRleHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNhcHRpb25cIik7XG4gIGlmIChuID4gc2xpZGVzLmxlbmd0aCkgeyBzbGlkZUluZGV4ID0gMSB9XG4gIGlmIChuIDwgMSkgeyBzbGlkZUluZGV4ID0gc2xpZGVzLmxlbmd0aCB9XG4gIGZvciAoaSA9IDA7IGkgPCBzbGlkZXMubGVuZ3RoOyBpKyspIHtcbiAgICBzbGlkZXNbaV0uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICB9XG4gIGZvciAoaSA9IDA7IGkgPCBkb3RzLmxlbmd0aDsgaSsrKSB7XG4gICAgZG90c1tpXS5jbGFzc05hbWUgPSBkb3RzW2ldLmNsYXNzTmFtZS5yZXBsYWNlKFwiIGFjdGl2ZVwiLCBcIlwiKTtcbiAgfVxuICBzbGlkZXNbc2xpZGVJbmRleCAtIDFdLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcbiAgZG90c1tzbGlkZUluZGV4IC0gMV0uY2xhc3NOYW1lICs9IFwiIGFjdGl2ZVwiO1xuICBjYXB0aW9uVGV4dC5pbm5lckhUTUwgPSBkb3RzW3NsaWRlSW5kZXggLSAxXS5hbHQ7XG59XG5cbiJdLCJmaWxlIjoic2NyaXB0LW1pbi5qcyJ9
